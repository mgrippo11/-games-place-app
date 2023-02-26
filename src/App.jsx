import { Routes , Route } from 'react-router-dom'

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Memotest from "./pages/Memotest"
import Pokemon from "./pages/Pokemon"
import WordsPerMinute from "./pages/WordsPerMinute"
import BlackJack from "./pages/BlackJack"

function App() {
  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      <div className='container'>
        <Routes>
          <Route element={<Memotest />} path="/memotest" />
          <Route element={<WordsPerMinute />} path="/wpm" />
          <Route element={<Pokemon />} path="/pokemon" />
          <Route element={<Home />} path="/" />
          <Route element={<BlackJack />} path="/blackjack" />
        </Routes>
      </div>
    </div>
  )
}

export default App
