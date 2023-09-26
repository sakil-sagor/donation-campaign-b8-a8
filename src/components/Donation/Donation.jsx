import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utility/localStorage";
import SingleCard from "./SingleCard";

const Donation = () => {
    const [cards, setCards] = useState([])
    const [showResult, setShowResult] = useState(cards)
    const allCard = useLoaderData();

    useEffect(() => {
        const storedDataInLocal = getStoredData();
        if (allCard.data.length) {
            const donationTotal = allCard.data.filter(card => storedDataInLocal.includes(card.id))
            const result = donationTotal.slice(0, 4)
            setCards(donationTotal)
            setShowResult(result)

        }

    }, [])


    const handleSeeAll = () => {
        setShowResult(cards)
    }
    console.log(cards, showResult)
    return (
        <div className="py-12 min-h-screen">
            <div className="container mx-auto px-2 ">

                {
                    showResult.length ? (
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                            {
                                showResult.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                            }

                        </div>
                    )
                        :
                        <div className="">
                            <p className="text-center text-4xl font-bold text-green-600"> You have no any donation yet! <br /> please donate.</p>
                        </div>
                }
                < div className="text-center mt-8">
                    <button onClick={handleSeeAll} className={`cl_btn_bg px-3 py-1 rounded text-white ${(cards.length <= 4 || showResult.length > 4) ? "hidden" : ""}`}>See All</button>
                </div>
            </div>
        </div >
    );
};

export default Donation;