import React from 'react';
import './Input.css';

type InputProps = {
    value: string,
    type?: string,
    placeholder?: string,
    onChange: (value: string) => void
};

export const Input = ({value, type, placeholder, onChange}:InputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {       
        onChange(e.target.value)
    }

    return(
        <input className='myInput' value={value} type={type} placeholder={placeholder} onChange={handleChange}/>
    );
};