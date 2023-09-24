import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkBar = ({ route }) => {
    return (
        <li className='ml-2 mt-6 md:mt-0 active'>
            <NavLink to={route?.path}>{route?.name}</NavLink>
        </li>
    );
};

export default LinkBar;