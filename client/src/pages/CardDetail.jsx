
const CardDetail = () => {
    return (
        <div className="flex justify-center bg-slate-700">
            <div className="grid grid-cols-3 grid-rows-4 gap-3">
                <div className="col-span-2 row-span-2 bg-slate-200">image</div>
                <div className="col-span-1  bg-slate-300">price
                    <div>productname</div>
                </div>
                <div className="col-span-1  bg-slate-400">seller</div>
                <div className="row-span-1 bg-slate-500">details</div>
                <div className="row-span-1  bg-slate-600">description</div>
            </div>
        </div>
    )
}

export default CardDetail
