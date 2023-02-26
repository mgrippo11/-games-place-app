import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav'>
      <ul className='ulNav'>
        <li className='liNav'>
          <Link className='linkNav' to="/memotest">Memotest</Link>
        </li>
        <li className='liNav'>
          <Link className='linkNav' to="/wpm">wpm</Link>
        </li>
        <li className='liNav'>
          <Link className='linkNav' to="/pokemon">Pokemon</Link>
        </li>
        <li className='liNav'>
          <Link className='linkNav' to="/blackjack">Blak Jack</Link>
        </li>
        <li className='liNav'>
          <Link className='linkNav' to="/">Volver a inicio</Link>
        </li>
      </ul>
    </div>
  )
}