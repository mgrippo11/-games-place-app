import { Routes , Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

import Memotest from "./pages/Memotest"
import Pokemon from "./pages/Pokemon"
import WordsPerMinute from "./pages/WordsPerMinute"

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Memotest />} path="/memotest" />
        <Route element={<WordsPerMinute />} path="/wpm" />
        <Route element={<Pokemon />} path="/pokemon" />
      </Routes>

      <Link className='' to="/memotest">memotest</Link>
      <Link className='' to="/wpm">wpm</Link>
      <Link className='' to="/pokemon">pokemon</Link>

    </div>
  )
}

export default App
