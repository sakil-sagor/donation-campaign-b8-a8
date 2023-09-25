import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                        <button onClick={handleAddDonation} className={`${card.color.button_bg} text-white px-4 py-1 rounded`} >Donate {card?.price}</button>
                    </div>
                    <h2>{card?.title}</h2>
                    <p>{card?.description}</p>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                theme="colored"
            />
        </div>
    );
};

export default CardDetails;