import { Routes , Route } from 'react-router-dom'
import Memotest from "./pages/Memotest"
import Pokemon from "./pages/Pokemon"
import WordsPerMinute from "./pages/WordsPerMinute"

function App() {
  return (
      <Routes>
        <Route element={<Memotest />} path="/memotest" />
        <Route element={<WordsPerMinute />} path="/wpm" />
        <Route element={<Pokemon />} path="/pokemon" />
      </Routes>
  )
}

export default App
