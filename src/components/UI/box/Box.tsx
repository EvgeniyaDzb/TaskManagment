import React from "react";
import './Box.css';

type BoxProps = {
    children: React.ReactNode,
    id:number, 
    title? :string, 
    body?:string
  };

export const Box = (({ children, id, title, body }:BoxProps) => {
    return (
     <div className='box'>
            <div>
                <strong>{title}</strong>
                <div>
                    {body}
                </div>
            </div>
            {children}
     </div>
    );
});