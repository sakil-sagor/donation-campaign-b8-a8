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

    const divStyle = {
        backgroundImage: `url(${card?.imgurl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '350px',
    };


    return (
        <div className='my-16'>
            <div className='container mx-auto px-2'>
                <div className=''>
                    <div style={divStyle} className=" flex flex-col justify-end rounded">

                        <div className='py-8 detials-bg  rounded'>
                            <button onClick={handleAddDonation} className={`${card.color.button_bg} ml-4  text-white px-4 py-1 rounded`} >Donate ${card?.price}</button>
                        </div>
                    </div>
                    <h2 className='font-bold text-2xl mt-6 mb-4'>{card?.title}</h2>
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