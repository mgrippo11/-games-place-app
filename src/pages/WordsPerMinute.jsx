import { useState } from "react"

const WORDS = [
  "Azul",
  "Amigo",
  "Marzo",
  "Feliz",
  "Casa",
  "Vaso",
  "Lápiz",
  "Danza",
  "Sonris",
  "Espejo",
  "Hielo",
  "Siesta",
  "Cepillo",
  "Almón",
  "Arroz",
  "Giras",
  "Diente",
  "Cielo",
  "Cálido",
  "Abrazo"
]

export default function WordsPerMinute() {
  const [CharacterCount, setCharacterCount] = useState(0)

  return (
    <div>
      <h1>Caracteres tipeados: {CharacterCount}</h1>
    </div>
  )
}