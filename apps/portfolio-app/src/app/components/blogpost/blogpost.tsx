import React from 'react';
interface postprops {
  title: string;
  content: string;
  imagesource: string;
}
const blogpost:React.FC<postprops> = ({ imagesource, title, content }) => {
  return (
    <div>
      <div className="w-full">
        <img src={imagesource} className="" />
      </div>
      <div className="w-full">
        <h6 className="font-semibold">{title}</h6>
      </div>
      <div className="w-full">
        <p className="font-light">{content}</p>
      </div>
    </div>
  );
};

export default blogpost;
