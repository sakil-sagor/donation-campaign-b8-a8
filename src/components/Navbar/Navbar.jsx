import { useState } from "react";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import imgLogo from './../../assets/Logo.png';
import LinkBar from "./LinkBar";


const Navbar = () => {
    const [open, setOpen] = useState(true)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/donation', name: 'Donation' },
        { id: 3, path: '/statistics', name: 'Statistics' },


    ];
    return (
        <div className='   sticky top-0 border-b shadow-lg bg-white z-[9999]'>
            <div className='py-4 container mx-auto px-2'>
                <div className='flex justify-between items-center'>
                    <div>
                        {/* <h1 className='block text-2xl font-bold ami'>Logo</h1> */}
                        <img className="w-3/4" src={imgLogo} alt="logo" />


                    </div>
                    <div>

                        <ul className=' hidden md:flex'>
                            {
                                routes.map(route => (
                                    <LinkBar key={route.id} route={route}></LinkBar>
                                ))
                            }
                        </ul>
                        <div onClick={() => setOpen(!open)}>
                            {
                                open ?
                                    <FaBars className='md:hidden  text-2xl font-bold'></FaBars>
                                    :
                                    <FaChevronLeft className='md:hidden  text-2xl font-bold'></FaChevronLeft>
                            }
                        </div>


                    </div>
                </div>
                <div className='md:hidden'>
                    {
                        !open ?
                            <ul className={` fixed text-center space-y-5 text-black duration-1000 transition-all top-16 mt-1 h-screen transf w-3/4 bg-pink-500  ${!open ? "left-0 " : "left-96"}`}>
                                {
                                    routes.map(route => (
                                        <LinkBar key={route.id} route={route}></LinkBar>
                                    ))
                                }
                            </ul>
                            :
                            ''
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;