import React from "react";
import './Button.css'

type ButtonProps = {
    children: string,
    onClick:() => void
};

export const Button = ({children, onClick}:ButtonProps) => {

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        onClick()
    }
    
    return(
        <div onClick={handleClick} className='myBtn'>
            {children}
        </div>
    );
};