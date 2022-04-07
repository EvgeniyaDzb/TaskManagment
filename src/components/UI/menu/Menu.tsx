import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

type MenuProps = {
    header: string,
    items: {path:string, value:string}[],
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>;
};


export const Menu = ({ header, items, active, setActive }: MenuProps) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={()=>setActive(false)}>
            <div className="blur" />
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul>
                    {items.map(item =>
                        <li key={item.path}>
                            <Link to={item.path}>{item.value}</Link>
                        </li>
                    )}
                </ul>

            </div>

        </div>
    );
};