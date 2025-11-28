import Video from './Header/Video'
import Navigation from './Header/Navigation'
import Logo from './Header/Logo'
import { MoveRight, ChevronDown } from 'lucide-react';
import './Header.css'

function Header() {
  const handleScroll = () => {
  const main = document.querySelector("main");
  if (!main) return;

  main.scrollIntoView({
    behavior: "smooth",
  });
};


  return (
        <header className="header">
            
            <Video />

            <div className="header-container">
              <div className="header-content">
                <Logo />
                <Navigation />
              </div>

              <div className="header-main">
                <h1 className="header-title">Votre studio vidéo clé en main pour podcasts & interviews</h1>

              <div className="header-call_to_action">
                <p>Créez. Enregistrez. Rayonnez</p>
                <button className="btn btn-primary">
                  Réserver un créneau <MoveRight />
                </button>
                
              </div>
              </div>
            <ChevronDown 
              onClick={handleScroll}
            />
            </div>
        </header>
  )
}

export default Header
