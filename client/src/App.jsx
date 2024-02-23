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
const App = () => {
  return (
    <>
      <div>
        <div>
          <div className="flex flex-col w-full">
            <div className='rounded-lg bg-slate-600 m-3 relative stick'>
              <nav className="m-3 relative stick">
                <Navbar />
              </nav>
              <search className='w-full'>
                <SearchBar />
              </search>
            </div>
            <main className="m-3 w-full h-dvh bg-slate-400 rounded-md flex justify-center items-center  ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/login" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/rent" element={<Rent />} />
              </Routes>
            </main>
            <footer className="m-3 w-full h-40 rounded-md bg-slate-500 ">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App