import React, { Dispatch, SetStateAction } from "react";
import "./Navbar.css"

type NavbarProps = {
    header: string;
    menuActive: boolean,
    setMenuActive: Dispatch<SetStateAction<boolean>>;
};


const Navbar = ({header, menuActive, setMenuActive }: NavbarProps) => {
    return (
        <nav>
          <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
            <span/>
          </div>
          <div className="navbar__header">{header}</div>
        </nav>
    );
};

export default Navbar;