import { useEffect, useState } from "react"

const WORDS = [
  "Azul",
  "Amigo",
  "Marzo",
  "Feliz",
  "Casa",
  "Vaso",
  "Lapiz",
  "Danza",
  "Sonrisa",
  "Espejo",
  "Hielo",
  "Siesta",
  "Cepillo",
  "Arroz",
  "Girasol",
  "Diente",
  "Cielo",
  "Calido",
  "Abrazo"
]

export default function WordsPerMinute() {
  const [word, setWord] = useState(() => WORDS[(Math.random() * WORDS.lengh) | 0])
  const [CharacterCount, setCharacterCount] = useState(0)
  const [buffer, setBuffer] = useState("")
  const [time, setTime] = useState(0)

  const handleSubmit = event => {
    event.preventDefault()

    if (buffer.toLocaleLowerCase === word.toLocaleLowerCase) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0])
      setCharacterCount((CharacterCount) => CharacterCount + word.length)
    }
    setBuffer("")
  }

    useEffect(() => {
      if (time !== 0) {
        const timeout = setTimeout(() => setTime(time -1), 1000)

        return () => clearTimeout(timeout)
      }
    }, [time])
  
  return (
    <main>
      <h1>Palabras por minuto</h1>
      <div className="div">
        { Boolean(time) && <h1>{word}</h1> }
        <h3>Caracteres tipeados: {CharacterCount}</h3>
        <h3>Tiempo restante: {time}</h3>
        {time ? (
          <form onSubmit={handleSubmit}>
            <input type="text" autoFocus value={buffer} onChange={(e) => setBuffer(e.target.value)}/>
            <button type="submit">submit</button>
          </form>
        ) : (
          <button onClick={() => setTime(60)}>Play</button>
        )
        }
      </div>
    </main>
  )
}