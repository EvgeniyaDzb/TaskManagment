import React from 'react';
import './Input.css';

type InputProps = {
    value: string,
    type?: string,
    placeholder?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const Input = (props:InputProps) => {
    return(
        <input className='myInput' {...props}/>

    );
};