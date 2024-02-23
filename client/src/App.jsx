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
          <div className="flex flex-col p-2 relative">
            <div className=' bg-violet-200 relative stick shadow-md z-10 '>
              <nav className="p-3 relative stick ">
                <Navbar />
              </nav>
              <search className='w-full '>
                <SearchBar />
              </search>
            </div>
            <main className="my-4 w-[99%] h-dvh bg-slate-50 rounded-md flex relative m-auto" style={{ overflow: 'hidden' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/login" element={<Login />} />
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