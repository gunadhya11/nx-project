'use client'
import React, { useState } from 'react';
import Editor from '../../components/editor';
import { gql, useMutation } from '@apollo/client';
// Define mutation
const CREATE_POST = gql`
  mutation CreatePost($content: String, $title: String) {
    createPost(content: $content, title: $title) {
      title
      content
    }
  }
`;

const CreateBlogPost = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState();
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST);
  return (
    <div>
      <h1>CreateBlogPost</h1>
      <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Title
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={title}
                onChange={(event) =>
                  setTitle((event.target as HTMLInputElement).value)
                }
              />
            </div>
          </div>
      <Editor editorState={editorState} setEditorState={setEditorState}/>
    </div>
  );
};

export default CreateBlogPost;