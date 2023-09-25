import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveDataInLocalStore } from '../../utility/localStorage';

const CardDetails = () => {
    const { id } = useParams()
    const cards = useLoaderData()
    const card = cards.data.find(card => card.id === parseInt(id))

    const handleAddDonation = () => {

        saveDataInLocalStore(parseInt(id))

    }



    return (
        <div>
            <div className='container mx-auto px-2'>
                <div className='h-screen'>
                    <div className='h-3/4'>
                        <img className='w-full h-3/4' src={card?.imgurl} alt="" />
                    </div>
                    <div>
                        <button onClick={handleAddDonation} className={`${card.color.button} px-4 py-1 rounded`} >{card?.price}</button>
                    </div>
                    <h2>{card?.title}</h2>
                    <p>{card?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;