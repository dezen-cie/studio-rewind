import type  { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react';
import Menus from './Menus'
import './Header.css'
import BackgroundVideo from './BackgroundVideo'

type HeaderProps = {
  children?: ReactNode
}

function Header({ children }: HeaderProps) {

  const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      footer.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }

  return (
    <header className="header">
      <BackgroundVideo />

      <div className="header-content">
        <nav className="nav">
          <Link className="header-logo_link" to="/reservation">
            <img
              src="/images/logo-header.png"
              alt="Logo Studio Rewind"
              className="logo-header"
            />
          </Link>

          <Menus />
        </nav>

        <div className="header-hero">
          {children}
          <ChevronDown 
            onClick={handleScroll}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
