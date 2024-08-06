'use client';
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Modal from './modal/modal';
import Notification from './notification/notification';
import CreateBlogPost from './createBlogPost';
import Editor from './editor';
// Define mutation
const CREATE_POST = gql`
  mutation CreatePost($content: String, $title: String) {
    createPost(content: $content, title: $title) {
      title
      content
    }
  }
`;

const createpostform = () => {
  const [title, setTitle] = useState('');
  const [content, setcontent] = useState('');
  const [editorState, setEditorState] = useState();
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST);
  const [isopen, setisopen] = useState(false);
  if (loading) return <h1>Submitting...</h1>;
  if (error) return <div>{`Submission error! ${error.message}`}</div>;
  const positiveresponse = () => {
    createPost({ variables: { content, title } });
    setTitle('');
    setcontent('');
    setisopen(false);
  };
  return (
    <>
    {data && <Notification/>}
      <button onClick={() => setisopen(true)} className='p-3 rounded focus:outline-offset-2 disabled:bg-slate-50 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white hover:shadow-md'>create new post</button>
      <Modal
        isopen={isopen}
        close={setisopen}
        okbtntext="Create Post"
        title="create new post"
        positivebtnclick={positiveresponse}
        isFullScreen={true}
      >
        <div className="w-full max-w-sm ">
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
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                content
              </label>
            </div>
            <div className="md:w-2/3">
            <Editor editorState={editorState} setEditorState={setEditorState}/>
              {/* <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={content}
                onChange={(event) => setcontent(event.target.value)}
              /> */}
            </div>
          </div>
          {/* <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                disabled={!content || !title}
                className="p-3 rounded focus:outline-offset-2 disabled:bg-slate-50 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white hover:shadow-md"
                onClick={() => {
                  setTitle('');
                  setcontent('');
                  addBook({ variables: { content, title } });
                }}
              >
                Add Book
              </button>
            </div>
          </div> */}
        </div>
      </Modal>
      <CreateBlogPost/>
    </>
  );
};

export default createpostform;
