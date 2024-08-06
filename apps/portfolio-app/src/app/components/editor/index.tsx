/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import ExampleTheme from './example-theme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { SetStateAction, useEffect, useState } from 'react';

const placeholder = 'Enter some rich text...';

const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [],
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  },
  // The editor theme
  theme: ExampleTheme,
};

function MyOnChangePlugin({ onChange }: any) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
  return null;
}
interface EditorProps {
  editorState: string | undefined;
  setEditorState: (arg0:any) => void;
}
export default function Editor({editorState, setEditorState}: EditorProps) {
  
  function onChange(editorState: SetStateAction<string | null>) {
    console.log("####", editorState);
    // setEditorState(editorState);
  }
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input"
                aria-placeholder={placeholder}
                placeholder={
                  <div className="editor-placeholder">{placeholder}</div>
                }
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </div>
      </div>
      <MyOnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}
