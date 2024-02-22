import { Link } from 'react-router-dom';
import '../index.css'
const Navbar = () => {
    return (
        <div className="relative ">
            <div className="flex bg-slate-300 h-14 items-center rounded-lg " >
                <div>
                    <li className="ml-8 mr-auto list-none"><Link to="/">logo</Link></li>
                </div>
                <div className="flex ml-auto mr-10 space-x-16 list-none">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="chat">chat</Link></li>
                    <li><Link to="/profile">profile</Link></li>
                    <li><Link to="login">Login</Link></li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
