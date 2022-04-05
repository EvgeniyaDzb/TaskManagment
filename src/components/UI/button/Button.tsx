import React from "react";
import './Button.css'

type ButtonProps = {
    children: string,
    onClick:(event: React.MouseEvent) => void
};

export const Button = ({children, onClick}:ButtonProps) => {
    return(
        <button onClick={onClick} className='myBtn'>
            {children}
        </button>
    );
};