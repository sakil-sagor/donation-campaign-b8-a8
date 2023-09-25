import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const { id } = useParams()
    const cardDetails = useLoaderData()
    console.log(cardDetails)

    return (
        <div>
            <div className='container mx-auto px-2'>
                <div>
                    <img src="" alt="" />
                </div>
                <h2>good</h2>
                <p>desc</p>
            </div>
        </div>
    );
};

export default CardDetails;