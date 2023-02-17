import { useEffect, useState } from "react"

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
  const [count, setCount] = useState(0)

  useEffect(() => {
      if (selected.length === 2) {
        if(selected[0] !== selected[1]){
          if(selected[0].split("|")[1] === selected[1].split("|")[1]){
              setGuessed((guessed) => guessed.concat(selected))
              const auxCont = count
              setCount(auxCont+1)

          } 
        }
          setTimeout(() => setSelected([]), 1000)
      }
    }, [selected])

  useEffect(() => {
    guessed.length === IMAGES.length && setHasWon(true)
  }, [guessed])

  return (
    <main>
      <div className="divTitle">
        <h1>Memotest</h1>
        <h4>Cantidad: {count} / 10</h4>
      </div>
      <ul className="ulMemo">
        {IMAGES.map( image => {
          const [,url] = image.split("|")

          return (
            <li className="liMemo" onClick={() => selected.length < 2 & selected[0] !== image && setSelected((selected) => selected.concat(image))} key={image}>
              {selected.includes(image) || guessed.includes(image) ? (
                <img className="imgMemo" src={url} alt="icon" />
              ) : (
                <img className="imgMemo" src="https://icongr.am/octicons/code.svg?size=128&color=currentColor" alt="icon" />
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
    </main>
  )
}