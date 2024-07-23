import React from 'react'
import { BlogPost } from '../../blog/page'
interface postlistprops {
    posts: [BlogPost];
}
function postlist({posts}:postlistprops) {
  return (
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
  )
}

export default postlist