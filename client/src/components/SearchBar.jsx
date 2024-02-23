import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import "../index.css"
const SearchBar = () => {
    return (
        <div>
            <div className="flex m-1 p-3 ">
                <div className="flex bg-zinc-50 px-1">
                <CiSearch className='my-2 h-6 w-4'/>
                    <input type="text" placeholder="search" className="px-3 focus:border-none outline: none" />
                </div>
                <div className=" flex  space-x-3 ml-auto">
                    <Link to="Sell" className='bg-violet-400 px-6 py-2 text-center rounded-full text-white font-semibold hover:bg-violet-900 hover:text-white'>Sell</Link><p></p>
                    <Link to="Rent" className='bg-violet-400 px-6 py-2 text-center rounded-full text-white font-semibold hover:bg-violet-900 hover:text-white'>Rent</Link><p></p>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
