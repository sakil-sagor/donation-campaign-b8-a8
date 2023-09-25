import { Link } from "react-router-dom";


const Card = ({ card }) => {

    const { id, title, color, imgurl, category } = card;

    return (
        <>
            <Link to={`card/${id}`}>
                <div className={`${color.background} rounded `}>
                    <img className="w-full rounded" src={imgurl} alt="" />
                    <div className="my-4">
                        <span className={`${color.button} ${color.text}  rounded  px-2 py-1 ml-4 `}>{category}</span>
                    </div>
                    <h2 className={`${color.text} rounded  px-2 py-1 ml-4 `}>{title}</h2>

                </div>
            </Link>
        </>
    );
};

export default Card;