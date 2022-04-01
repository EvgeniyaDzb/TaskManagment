import React from "react";
import './Button.css'

type ButtonProps = {
    children: string,
    handleClick:(event: React.MouseEvent) => void
};

export const Button = ({children, handleClick}:ButtonProps) => {
    return(
        <button onClick={handleClick} className='myBtn'>
            {children}
        </button>
    );
};