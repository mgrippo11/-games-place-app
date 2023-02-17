import { useEffect, useState } from "react"

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
  const [pokemon, setPokemon] = useState(() => Math.floor(Math.random() * POKEMONS.length))
  const [pokemonChoices, SetPokemonChoices] = useState([POKEMONS[pokemon], POKEMONS[Math.floor(Math.random() * POKEMONS.length)], POKEMONS[Math.floor(Math.random() * POKEMONS.length)]])
  const [newChoices, SetNewChoices] = useState([])

  // function desordenar(Array){
  //   var t = Array.sort(function(a,b) {return (Math.random()-0.5)});
  //   console.log(Array.sort(function(a,b) {return (Math.random()-0.5)}))
  //   return [...t];
  // }

  const handleSubmit = event => {
    event.preventDefault()

    if (buffer.toLowerCase() === POKEMONS[pokemon].toLowerCase()) {
      setHasWon(true)
      setBuffer("")
      console.log("Correcto Ganaste!")
    } else {
      setBuffer("")
      console.log("Incorrecto! Volve a intentar...")
    }
  }

  // function setNewPokemon(poke) {
    
  //   console.log(POKEMONS[poke])
  //   SetPokemonChoices([POKEMONS[poke],POKEMONS[Math.floor(Math.random() * POKEMONS.length)],POKEMONS[Math.floor(Math.random() * POKEMONS.length)]])
  //   return POKEMONS[poke]
  // }

  // useEffect(() => {
  //   console.log(POKEMONS[pokemon])
  //   console.log(pokemonChoices)
  //   let id1 = Math.floor(Math.random() * POKEMONS.length)
  //   let id2 = Math.floor(Math.random() * POKEMONS.length)
  //   id1 === pokemon ? id1 = pokemon+1 : null
  //   id2 === pokemon || id2 === id1 ? id1 = pokemon+2 : null
  //   // console.log(id1, id2)
  //   SetPokemonChoices([POKEMONS[pokemon], POKEMONS[id1], POKEMONS[id2]])
  //   let x = desordenar(pokemonChoices);
  //   SetNewChoices(x)

  //   console.log(newChoices)
  //   // for (let i=0;i<3;i++){ //creo bucle para llenar array vacío
  //   //   let x = desordenar(pokemonChoices);
  //   //   numerosDesordenados[i] = x;
  //   //   console.log(numerosDesordenados)
  //   // }
  // },[])

  return (
    <main>
      <h1>Que Pokemon es?</h1>
      <div className="div">
        <div>
          <img className="imgPokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon + 1}.png`} alt="pokemon " style={{filter: hasWon ? "" : "brightness(0) invert(1)"}}/>
          
          {/* <ul className="pokemonChoice">
            {
              pokemonChoices.map(choice => (
                  <li key={choice}><h3>{choice}</h3></li>
              ))
            }
          </ul> */}
        </div>
        {hasWon ? (
            <button 
              onClick={() => {
                  setPokemon(Math.floor(Math.random() * POKEMONS.length))
                  setNewPokemon(pokemon)
                  setHasWon(false)
                }
              }
            >
            Jugar de nuevo
            </button>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" autoFocus value={buffer} onChange={(e) => setBuffer(e.target.value)}/>
              <button type="submit">Submint</button>
            </form>
          )
        }
      </div>
    </main>
  )
}