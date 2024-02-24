import { useSelector, useDispatch } from "react-redux"
import Cards from "../components/Cards"
import { setAllCards } from "../redux/features/cardSlice"
import { useEffect } from "react";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/card/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const cardsData = await response.json();
                dispatch(setAllCards(cardsData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [dispatch]);

    const { currentCards } = useSelector((state) => state.card);
    console.log(currentCards)
    return (
        <div className="p-6">
            <div className="flex flex-wrap gap-6 md:justify-evenly justify-center items-center">
                {
                    currentCards.map((card, i) => (
                        <Cards
                            key={card._id}
                            card={card}
                            i={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
