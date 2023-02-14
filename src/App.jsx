import { Routes , Route } from 'react-router-dom'

import Memotest from "./pages/Memotest"
import Navbar from './pages/Navbar';
import Pokemon from "./pages/Pokemon"
import WordsPerMinute from "./pages/WordsPerMinute"

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
        </Routes>
      </div>
    </div>
  )
}

export default App
