import React from 'react';
import  './header.css';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="header d-flex m-1">
            <h3>
                <Link to='/'>
                   Star DB
                </Link>
            </h3>
            <ul className="d-flex">
               <li>
                   <Link to='/people'>People</Link>
               </li>
                <li>
                    <Link to='/planets'>Planets</Link>
                </li>
                <li>
                    <Link to='/starships'>Starships</Link>
                </li>
            </ul>


        </div>
    );
};

export default Header;