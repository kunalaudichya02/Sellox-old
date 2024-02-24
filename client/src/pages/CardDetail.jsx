import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"

const CardDetail = () => {
    const { cardId } = useParams();
    const { currentId } = useSelector((state) => state.card);
    console.log(cardId)
    console.log(currentId)
    return (
        <div className="flex justify-center bg-slate-700">
            <div className="grid grid-cols-3 grid-rows-4 gap-3">
                <div className="col-span-2 row-span-2 bg-slate-200">
                    <img src={`/${currentId.imagePath}`} alt=
                        {currentId.productName} className="w-full h-full object-cover" /></div>
                <div className="col-span-1  bg-slate-300">{currentId.price}
                    <div>{currentId.productName}</div>
                </div>
                <div className="col-span-1  bg-slate-400">{currentId.sellerName}</div>
                <div className="row-span-1 bg-slate-500">{currentId.details}</div>
            </div>
        </div>
    )
}

export default CardDetail
