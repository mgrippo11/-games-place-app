import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

const IMAGES = [
  "https://icongr.am/devicon/android-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/linux-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"  
].flatMap(image => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5)

export default function Memotest() {

  const [guessed, setGuessed] = useState([])
  const [selected, setSelected] = useState([])
  const [hasWon, setHasWon] = useState(false)

  useEffect(() => {
      if (selected.length === 2) {
          if(selected[0].split("|")[1]===selected[1].split("|")[1]){
              setGuessed((guessed) => guessed.concat(selected))
          }
          setTimeout(() => setSelected([]), 500)
      }
    }, [selected])

  useEffect(() => {
    guessed.length === IMAGES.length && setHasWon(true)
  }, [guessed])

  return (
    <main>
      <h1>Memotest</h1>
      <ul className="memotestUL">
        {IMAGES.map( image => {
          const [,url] = image.split("|")

          return (
            <li onClick={() => selected.length < 2 && setSelected((selected) => selected.concat(image))} key={image}>
              {selected.includes(image) || guessed.includes(image) ? (
                <img src={url} alt="icon" />
              ) : (
                <img src="https://icongr.am/octicons/code.svg?size=128&color=currentColor" alt="icon" />
              )}
            </li>
          )
        })}
      </ul>
      {hasWon && 
        <div className=''>
            <p className=''>¡Muy bien, has ganado!</p>
            <button onClick={() => location.reload()} className=''>Volver a jugar</button>
        </div>
      }
      <Link className='nes-btn is-warning' to="/">Volver a inicio</Link>
    </main>
  )
}