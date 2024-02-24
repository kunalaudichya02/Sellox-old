import { Link } from "react-router-dom"

const Cards = () => {
    return (
        <>
            <Link to="/user/card/cardid">
                <div className="rounded-md bg-slate-100 shadow-md">
                    <div className="w-60 h-60 flex flex-col p-2">
                        <div className="h-2/3">
                            <p>image</p>
                        </div>
                        <div>
                            <p>price</p>
                            <p>details</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Cards
