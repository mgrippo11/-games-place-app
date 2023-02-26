import { useState } from "react";
import CARDS from "../img/cards";

const types = ['C','D','H','S']
const especials = ['J','Q','K','A'];

export default function BlackJack() {

  const [newGame, setNewGame] = useState(true)
  const [deck, setDeck] = useState([])
  const [scoresPlayers, setScoresPlayers] = useState([0, 0])
  const [playerDeck, setPlayerDeck] = useState([])
  const [machineDeck, setMachineDeck] = useState([])
  const [endGame, setEndGame] = useState(false)
  const [message, setMessage] = useState('')

  // MULTIPLAYER
  // function StarNewGame() {
  //   newDeck()
  //   for( let i = 0; i < 2; i++ ) {
  //     scoresPlayers.push(0);
  //   }
  //   console.log(scoresPlayers)
  // }

  // NUEVO MAZO
  function newDeck() {
    types.map(type => {
      for( let i = 2; i <= 10; i++ ) {
        setDeck( arr => [...arr , i + type])
      }
      especials.map(especial => {
        setDeck( arr => [...arr , especial + type])
      })
    })
  }

  // PEDIR NUEVA CARTA
  function newCard() {
    if ( deck.length === 0 ) {
      console.log('No hay cartas en el mazo')
    }
    const card = selectCard()
    const selectedCard = deck[card]
    setDeck(deck.filter(item => item !== selectedCard))
    accumulateScore(selectedCard, 0)
    setPlayerDeck( arr => [...arr , selectedCard])

    setTimeout(() => {
      if(scoresPlayers[0] > 21){
        alert('Lo siento mucho, perdiste...')
        setEndGame(true)
        finishGame()
      } else if(scoresPlayers[0] === 21){
        alert('21, ganaste!!')
        setEndGame(true)
        finishGame()
      }
    }, 500)
  }

  // SELECCIONAR CARTA ALEATOREA
  function selectCard() {
    const card = Math.floor((Math.random() * deck.length - 1))
    return card
  }

  // VALOR DE LA CARTA
  function cardValue(card) {
    const value = card.substring(0, card.length - 1)
    return ( isNaN(value) )
            ?
              ( value === 'A' )
              ?
                11
              :
                10
            :
              value * 1
  }

  // AGREGAR CARTA A LA NANO DEL JUGADOR
  function accumulateScore(card, player) {
    console.log(card)
    if(card === undefined){
      console.log(card)
      selectCard()
    }
    if(player === 0) {
      setScoresPlayers([scoresPlayers[player] = scoresPlayers[player] + cardValue(card)], 0)
    } else {
      if(scoresPlayers[player] === undefined){
        scoresPlayers[player] = 0
        console.log(scoresPlayers[player])
      }
      setScoresPlayers([scoresPlayers[0], scoresPlayers[player] = scoresPlayers[player] + cardValue(card)])
    }
  }

  // TURNO MAQUINA
  function machineGame() {
    do{
      const card = selectCard()
      const selectedCard = deck[card]
      setDeck(deck.filter(item => item !== selectedCard))
      accumulateScore(selectedCard, 1)
      setMachineDeck( arr => [...arr , selectedCard])
    } while ((scoresPlayers[1] < scoresPlayers[0]) && (scoresPlayers[0] <= 21))

    winner()

    setTimeout(() => {
      finishGame()
    }, 1000)
  }

  // vERIFICAR GANADOR
  function winner() {
    setTimeout(() => {
      if(scoresPlayers[1] === scoresPlayers[0]){
        alert('Empate')
      } else if ( scoresPlayers[0] > 21 ) {
        alert('Gana la casa!')
      } else if( scoresPlayers[1] > 21 ) {
        if(scoresPlayers[0] === 21){
          alert('Gana el Jugador! Blackjack!');
        } else{
          alert('Gana el Jugador!');
        };
      } else {
        alert('Gana la casa!')
      }
    }, 200)
  }

  // TERMINAR JUEGO
  function finishGame() {
    setEndGame(false)
    setNewGame(true)
    setDeck([])
    setPlayerDeck([])
    setMachineDeck([])
    setScoresPlayers([0,0]) 
  }
  
  return (
    <main>
      <h1>Black Jack</h1>
      <div>
        {newGame ?
          <button 
            onClick={() => {
                setNewGame(false)
                newDeck()
              }
            }
            id="newGameBtn">
            Jugar
          </button>
        :
          <div>
            <button 
            onClick={() => {
                newCard()
              }
            }
            id="newCardBtn"
            >
              Pedir carta
            </button>
            <button 
            onClick={() => {
                machineGame()
              }
            }
            id="newCardBtn"
            >
              Pasar
            </button>
            <button
            onClick={() => {
                finishGame()
              }
            }
            id="stopBtn"
            >
              Detener
            </button>
          </div>

        }
      </div>
      <div>
        <div className="playerDeck">
          <h3>Jugador: <small>{scoresPlayers[0]}</small></h3>
          { playerDeck.length === 0 ?
            <h5>sin cartas</h5>
          :  
            playerDeck.map(card => {
              return(
                  <img key={card} src={CARDS[`${card}`]} alt="card" />
              )
            })
          }
        </div>
        <div className="machineDeck">
          <h3>Maquina: <small>{scoresPlayers[1]}</small></h3>
          { machineDeck.length === 0 ?
            <h5>sin cartas</h5>
          :  
            machineDeck.map(card => {
              return(
                  <img key={card} src={CARDS[`${card}`]} alt="card" />
              )
            })
          }
        </div>
        { endGame ?
            <div>
              <button
                onClick={() => {
                    finishGame()
                  }
                }
              >
                <h5>{message}</h5>
              </button>
            </div>
          :
            <h5>{message}</h5>
        }
        
      </div>
    </main>
  )

}
