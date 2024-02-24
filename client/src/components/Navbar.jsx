import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineChatBubble } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import logo from "../assets/logo.svg"
import '../index.css'

const links = [
    { name: 'Home', to: '/', icon: HiOutlineHome },
    { name: 'Chat', to: '/chat', icon: HiOutlinePhotograph },
    { name: 'Sell', to: '/user/sell', icon: HiOutlineUserGroup },
    { name: 'Rent', to: '/user/rent', icon: HiOutlineHashtag },
];

// eslint-disable-next-line react/prop-types
const NavLinks = ({ handleClick }) => (
    <div className="mt-10">
        {links.map((item) => (
            <NavLink
                key={item.name}
                to={item.to}
                className="flex flex-row justify-start items-center my-8 text-sm font-medium text-black hover:text-cyan-400"
                onClick={() => handleClick && handleClick()}
            >
                <item.icon className="w-6 h-6 mr-2" />
                {item.name}
            </NavLink>
        ))}
    </div>
);

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <div className="relative shadow-2xl">
                <div className="flex bg-violet-800 h-14 items-center rounded-lg " >
                    <div>
                        <li className="ml-8 mr-auto list-none"><Link to="/">
                            <img src={logo} alt="SELLOX" className='w-6 h-6' />
                        </Link></li>
                    </div>
                    <div className="md:flex md:ml-auto md:mr-5 md:space-x-10 flex flex-row ml-auto space-x-5 mr-3 list-none items-center">
                        <div className='hidden md:space-x-10 md:flex'>
                            <li ><Link to="/"><MdHomeFilled className='w-6 h-6 hover:shadow-lg' style={{ color: 'white' }} /></Link></li>
                            <li><Link to="chat"><MdOutlineChatBubble className='w-6 h-6' style={{ color: 'white' }} /></Link></li>
                        </div>

                        <li><Link to="/profile"><FaCircleUser className='w-5 h-6 md:static absolute top-4 right-16' style={{ color: 'white' }} /></Link></li>

                        {/* Mobile sidebar */}
                        <div className="absolute md:hidden top-4 right-3">
                            {!mobileMenuOpen ? (
                                <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
                            ) : (
                                <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
                            )}
                        </div>

                        <div className='md:flex hidden'>
                            <li className='bg-zinc-50 text-black text-sm font-semibold 
                    hover:text-white hover:bg-amber-700 px-2 py-1 rounded-md'><Link to="/user/login">LOGIN</Link></li>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute top-0 h-screen w-1/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
                <img src={logo} alt="logo" className="w-full h-14 object-contain" />
                <NavLinks handleClick={() => setMobileMenuOpen(false)} />
            </div>
        </>
    )
}

export default Navbar
