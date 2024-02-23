import Cards from "../components/Cards"

const Home = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="p-6">
            <div className="flex flex-wrap gap-3 sm:justify-start justify-center items-center">
                {
                    arr.map((ever, i) => (
                        <Cards key={i} />
                    ))

                }
            </div>
        </div>
    )
}

export default Home
