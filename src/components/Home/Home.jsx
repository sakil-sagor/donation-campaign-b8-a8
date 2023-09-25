import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import Header from "../Header/Header";

const Home = () => {
    const [search, setSearch] = useState('')
    const cards = useLoaderData();
    const [searchResult, setSearchResult] = useState(cards.data)


    const handleSearch = () => {
    }
    console.log(searchResult)
    return (
        <div className="">
            <Header setSearch={setSearch} handleSearch={handleSearch}></Header>
            <CategoryContainer searchResult={searchResult}></CategoryContainer>
        </div>
    );
};

export default Home;