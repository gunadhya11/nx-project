import React from 'react';
import { BlogPost } from '../../blog/page';
import { ClockIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
interface postlistprops {
  posts: [BlogPost];
}
function postlist({ posts }: postlistprops) {
  return (
    <ul className="flex">
      {posts.map((item: { title: String; content: String }) => (
        <li className="p-3 m-0.5 border border-slate-200 hover:shadow-xl">
          <div className="w-full">
            <img src="https://picsum.photos/200/150" className="" />
          </div>
          <div className="pt-3">
            <h6 className="font-semibold">{item.title}</h6>
            <p className="font-light">{item.content}</p>
            <div className="flex">
              <div>
                <ClockIcon className="size-6 text-blue-500"/>
              </div>
              <div>
                <ChatBubbleLeftIcon className="size-6 text-blue-500"/>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default postlist;
