import Banner from "../Banner/Banner";


const Header = ({ setSearch, handleSearch }) => {
    return (
        <div className="banner-container h-2/3 pt-24">
            <div className="container mx-auto px-2">

                <Banner setSearch={setSearch} handleSearch={handleSearch}></Banner>
            </div>
        </div>
    );
};

export default Header;