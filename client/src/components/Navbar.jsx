import { Link } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineChatBubble } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import '../index.css'
const Navbar = () => {
    return (
        <div className="relative ">
            <div className="flex bg-violet-800 h-14 items-center rounded-lg " >
                <div>
                    <li className="ml-8 mr-auto list-none"><Link to="/">
                        <img src="./logo-color.png/" alt="SELLOX" />
                        </Link></li>
                </div>
                <div className="flex ml-auto mr-5 space-x-10 list-none">
                    <li ><Link to="/"><MdHomeFilled  className='w-6 h-6 hover:shadow-lg' style={{color: 'white'}}/></Link></li>
                    <li><Link to="chat"><MdOutlineChatBubble className='w-6 h-6' style={{color: 'white'}} /></Link></li>
                    <li><Link to="/profile"><FaCircleUser className='w-5 h-6 ' style={{color: 'white'}}/></Link></li>
                    <li className='bg-zinc-50 text-black text-sm font-semibold 
                    hover:text-white hover:bg-amber-700 px-2 py-1 rounded-md'><Link to="/user/login">LOGIN</Link></li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
