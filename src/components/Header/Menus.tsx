// Menus.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MoveRight, Menu, X } from 'lucide-react'
import './Menus.css'

function Menus() {
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <>
      <div className={`menu ${isOpen ? 'menu--open' : ''}`}>
        <Link
          className="header-logo_link"
          to="/"
          state={{ scrollTo: 'studio' }}
          onClick={() => setIsOpen(false)}
        >
          Notre Studio
        </Link>
        <Link
          className="header-logo_link"
          to="/"
          state={{ scrollTo: 'formules' }}
          onClick={() => setIsOpen(false)}
        >
          Nos Formules
        </Link>
        <Link className="header-logo_link" to="/equipe" onClick={() => setIsOpen(false)}>
          Notre Equipe
        </Link>
        <Link className="header-logo_link btn_link" to="/reservation" onClick={() => setIsOpen(false)}>
          Réserver
          <MoveRight />
        </Link>
        {/* <Link className="header-logo_link" to="/notre-studio" onClick={() => setIsOpen(false)}>
          <UserRound />
        </Link> */}
      </div>

    
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setIsOpen(open => !open)}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </>
  )
}

export default Menus
