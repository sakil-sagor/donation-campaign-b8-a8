import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkBar = ({ route, open, setOpen }) => {
    return (
        <li className='ml-2 mt-10 md:mt-0 active border md:border-0  nav-bg '>
            <NavLink className="block py-2" onClick={() => setOpen(!open)} to={route?.path}>{route?.name}</NavLink>
        </li>
    );
};

export default LinkBar;