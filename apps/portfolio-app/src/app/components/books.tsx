'use client';
import { gql, useSuspenseQuery } from '@apollo/client';
interface Book {
  title: String;
  author: String;
}
export function Books() {
  const GET_LOCATIONS = gql`
    query GetBooks {
      books {
        title
        author
      }
    }
  `;
  const { data: { books } = [] } = useSuspenseQuery(GET_LOCATIONS);
  console.log(books);
  return (
    <div>
      <p>books container</p>
      <ul>
        {books.map((item: { title: String }) => (
          <li className="p-3 rounded-lg m-0.5 bg-red-500  text-white ">{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
