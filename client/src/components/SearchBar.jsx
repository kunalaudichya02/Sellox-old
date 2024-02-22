import { Link } from 'react-router-dom';

const SearchBar = () => {
    return (
        <div>
            <div className="flex m-3">
                <div className="">
                    <input type="text" placeholder="search" className="" />
                </div>
                <div className=" flex mr-5 space-x-10 ml-auto">
                    <Link to="Sell">Sell</Link><p></p>
                    <Link to="Rent">Rent</Link><p></p>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
