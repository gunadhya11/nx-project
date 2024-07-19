'use client'
import { useQuery, gql } from '@apollo/client';
import createApolloClient from '../apollo-client';
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from 'react';
export const dynamic = 'force-dynamic';
export async function Books() {
  const GET_LOCATIONS = gql`
    query GetBooks {
      books {
        title
        author
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data);
  return (
    <div>
      <p>books container</p>
      {data?.books.map(
        (item: {
          title:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<AwaitedReactNode>
            | null
            | undefined;
        }) => (
          <li>{item.title}</li>
        )
      )}
    </div>
  );
}
