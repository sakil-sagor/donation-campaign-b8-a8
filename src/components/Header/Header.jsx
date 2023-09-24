import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";


const Header = () => {
    return (
        <div className="banner-container h-2/3">
            <div className="container mx-auto px-2">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;