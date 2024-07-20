'use client';
import { gql, useSuspenseQuery } from '@apollo/client';
import Createpost from '../components/createpostform';
import Modal from '../../app/components/modal'
import { useState } from 'react';
interface BlogPost {
  title: String;
  content: String;
}
const Page = () => {
  const GET_LOCATIONS = gql`
    query GetPosts {
      posts {
        title
        content
      }
    }
  `;

  const [isopen, setisopen] = useState(false)

  const { data: { posts } = [] } = useSuspenseQuery(GET_LOCATIONS);
  return (
    <div>
      <h1>welcome to my blog!</h1>
      <button onClick={()=>setisopen(true)}>create new post</button>
      <Modal isopen={isopen} close={setisopen}>content</Modal>
      <Createpost/>
      <ul>
        {posts.map((item: { title: String, content: String }) => (
          <li className="p-3 rounded-md m-0.5 border flex">
            <div>
              <img src="https://picsum.photos/50" className='rounded-md' />
            </div>
            <div className='px-3'><h6>{item.title}</h6><p>{item.content}</p></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
