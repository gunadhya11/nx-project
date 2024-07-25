import React from 'react'
interface buttonProps {
    handleClick: (event:React.MouseEvent<HTMLElement>)=>void;
    buttonText: string;
    type: string;
}
const button = ({handleClick, buttonText, type}: buttonProps) => {
  return (
    <button onClick={handleClick}>{buttonText}</button>
  )
}

export default button;