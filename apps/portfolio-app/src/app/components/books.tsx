import { gql } from "@apollo/client";
import createApolloClient from "../apollo-client";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
export async function Books(){
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query GetBooks {
          books {
            title
            author
          }
        }
      `,
    });
    console.log(data)
    return <div>
        <p>books container</p>
        {data?.books.map((item: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; })=><li>{item.title}</li>)}
    </div>

}