import React, { useRef } from 'react';
interface buttonProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  buttonText: string;
  type: string;
}
const button = ({ handleClick, buttonText, type }: buttonProps) => {
  const buttonBg = type === 'primary' ? 'bg-yellow-400' : ( type === 'secondary'? 'bg-blue-600' : 'bg-gray-600')
  return (
    <button
      onClick={handleClick}
      className={`border hover:text sborder-yellow-400 p-2 px-3 rounded text-white hover:shadow-lg ${buttonBg}`}
    >
      {buttonText}
    </button>
  );
};

export default button;
