import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ card }) => {
    const { id, imgur2, category, title, price, color } = card;
    return (
        <div className={`${color.background}    rounded-md  flex  items-center`}>
            <div className='mr-4'>
                <img className='w-full h-full' src={imgur2} alt="" />
            </div>
            <div className=''>
                <span className={`${color.text} ${color.button}  rounded px-2 py-1`}>{category}</span>
                <h2 className='font-bold  md:text-xl'>{title}</h2>
                <h3 className={`${color.text} font-bold  rounded px-2 py-1`}>${price}</h3>
                <Link to={`card/${id}`}>  <button className={`${color.button_bg} text-white rounded px-2 py-1`} >View Details</button></Link>
            </div>

        </div>
    );
};

export default SingleCard;