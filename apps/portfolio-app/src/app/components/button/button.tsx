import React, { useRef } from 'react';
interface buttonProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  buttonText: string;
  type: string;
}
const button = ({ handleClick, buttonText, type }: buttonProps) => {
  const ref = useRef(null);
  const handlemousemove = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.pageX, e.pageY);
    if (ref && ref.current) {
      ref.current.style.backgroundPosition = `${e.pageX / 2}px ${
        e.pageY / 2
      }px`;
      ref.current.style.backgroundImage = 'radial-gradient(#e66465, #9198e5)';
    }
  };
  return (
    <button
      onClick={handleClick}
      ref={ref}
      onMouseMove={handlemousemove}
      className="border sborder-yellow-400 p-2 px-3 rounded text-white hover:shadow-md"
    >
      {buttonText}
    </button>
  );
};

export default button;
