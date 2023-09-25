import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utility/localStorage";
import SingleCard from "./SingleCard";

const Donation = () => {
    const [cards, setCards] = useState([])
    const allCard = useLoaderData();

    useEffect(() => {
        const storedDataInLocal = getStoredData();
        if (allCard.data.length) {
            const donationTotal = allCard.data.filter(card => storedDataInLocal.includes(card.id))
            setCards(donationTotal)

        }


    }, [])
    return (
        <div className="py-12">
            <div className="container mx-auto px-2">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                    {
                        cards.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Donation;