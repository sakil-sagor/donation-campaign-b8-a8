import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utility/localStorage";


const Statistics = () => {

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

        </div>
    );
};

export default Statistics;