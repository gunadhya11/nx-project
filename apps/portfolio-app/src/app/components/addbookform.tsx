'use client';
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

// Define mutation
const ADD_BOOK = gql`
  mutation CreateBook($author: String, $title: String) {
    addBook(author: $author, title: $title) {
      title
      author
    }
  }
`;

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [addBook, { data, loading, error }] = useMutation(ADD_BOOK);

  if (loading) return <h1>Submitting...</h1>;
  if (error) return <div>{`Submission error! ${error.message}`}</div>;
  return (
    <div className='border-zinc-300 rounded-md'>
      <h1>add book</h1>
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
              Author
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              disabled={!author || !title}
              className="p-3 rounded focus:outline-offset-2 disabled:bg-slate-50 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white hover:shadow-md"
              onClick={() => {
                addBook({ variables: { author, title } });
              }}
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookForm;
