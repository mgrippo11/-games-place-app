import { useState } from "react"

const POKEMONS = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash"
]

const POKEID = Math.floor(Math.random() * POKEMONS.length)

export default function Pokemon() {
  const [hasWon, setHasWon] = useState(false)
  const [buffer, setBuffer] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    if (buffer.toLocaleLowerCase() === POKEMONS[POKEID]) {
      setHasWon(true)
      console.log("Correcto Ganaste!")
    } else {
      console.log("Incorrecto! Volve a intentar...")
    }
  }

  return (
    <div>
      <img className="imgPokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${POKEID + 1}.png`} alt="pokemon " style={{filter: hasWon ? "" : "brightness(0) invert(1)"}}/>
      {hasWon ? (
          <button onClick={() => location.reload()}>Jugar de nuevo</button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" autoFocus onChange={(e) => setBuffer(e.target.value)}/>
            <button type="submit">Submint</button>
          </form>
        )
      }
    </div>
  )
}