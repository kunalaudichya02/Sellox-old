import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Chat from './pages/Chat'
import Sell from './pages/Sell';
import Rent from './pages/Rent';
import SearchBar from './components/SearchBar';
import Signup from './pages/Signup';
const App = () => {
  return (
    <>
      <div>
        <div>
          <div className="flex flex-col w-full">
            <div className=' bg-violet-200  relative stick shadow-md'>
              <nav className="m-3 relative stick">
                <Navbar />
              </nav>
              <search className='w-full '>
                <SearchBar />
              </search>
            </div>
            <main className="w-[95%] my-4 h-dvh bg-slate-50 m-auto rounded-md flex justify-center items-center  ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/login" element={<Login />} />
                <Route path="/user/Signup" element={<Signup />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/rent" element={<Rent />} />
              </Routes>
            </main>
            <footer className="w-full h-40 rounded-md bg-violet-900 text-white shadow-md">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App