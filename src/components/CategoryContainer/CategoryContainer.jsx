import React, { useEffect, useState } from 'react';
import Card from './Card';

const CategoryContainer = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('data.json');
                const result = await res.json();
                setCards(result.data)

            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])
    console.log(cards)
    return (
        <div className="container mx-auto px-2">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                {

                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default CategoryContainer;