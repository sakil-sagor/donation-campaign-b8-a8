import React from 'react';
import Card from './Card';

const CategoryContainer = ({ searchResult }) => {
    return (
        <div className="container mx-auto px-2 my-20">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                {

                    searchResult.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default CategoryContainer;