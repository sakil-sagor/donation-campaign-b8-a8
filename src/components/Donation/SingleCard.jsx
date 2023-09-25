import React from 'react';

const SingleCard = ({ card }) => {
    const { imgur2, category, title, price, color } = card;
    return (
        <div className={`${color.background}   rounded-md  flex  items-center`}>
            <div className='mr-4'>
                <img className='w-full h-full' src={imgur2} alt="" />
            </div>
            <div>
                <span className={`${color.text} ${color.button}   rounded px-2 py-1`}>{category}</span>
                <h2 className='font-bold text-xl'>{title}</h2>
                <h3 className={`${color.text} font-bold  rounded px-2 py-1`}>${price}</h3>
                <button className={`${color.button_bg} text-white rounded px-2 py-1`} >View Details</button>
            </div>

        </div>
    );
};

export default SingleCard;