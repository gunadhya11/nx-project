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
    <div>
      <h1>add book</h1>
      <input
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="text"
        onChange={(event) => setTitle((event.target as HTMLInputElement).value)}
      />
      <br />
      <input
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="text"
        onChange={(event) => setAuthor(event.target.value)}
      />
      <br />
      <button
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => {
          addBook({ variables: {  author, title } });
        }}
      >
        Add Book
      </button>
    </div>
  );
};

export default AddBookForm;
