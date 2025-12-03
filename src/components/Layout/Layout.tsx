// Layout.tsx
import { Link, Outlet, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { MoveRight } from 'lucide-react';
import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout() {
  const { pathname } = useLocation()
  
  let headerContent: ReactNode = null

  switch (pathname) {
    case '/':
      headerContent = (
        <>
          <h1>Votre studio vidéo clé en main pour podcasts & interviews</h1>

          <div className="header-call_to_action">
            <p>
              Créez. Enregistrez. Rayonnez
            </p>
            <Link className="" to="/reservation">
              <button 
                type="button" 
                className="btn btn-primary">
                Réserver un créneau  
                  <MoveRight />
              </button>
            </Link>
          </div>

          
        </>
      )
      break

    case '/equipe':
      headerContent = (
        <>
          <h1>Rencontrez notre équipe</h1>
          <div className="header-call_to_action">
            <p className="p-header">
              Pendant le tournage, vous êtes accompagné par un intervenant habitué à l’exercice caméra. Il sait mettre à l’aise, poser les bonnes questions, relancer la conversation et vous aider à exprimer exactement ce que vous souhaitez transmettre. Une fois vos prises capturées, notre monteur transforme le tout en un contenu propre, dynamique et directement exploitable pour vos réseaux ou votre communication. Ici, chaque membre de l’équipe est là pour vous aider à donner le meilleur de vous-même. Cette page vous permet de découvrir ceux qui seront à vos côtés lors de votre passage au studio.
            </p>
            <Link className="" to="/reservation">
              <button 
                type="button" 
                className="btn btn-primary">
                Réserver un créneau  
                <MoveRight />
              </button>
            </Link>
          </div>
        </>
      )
      break

    default:
      headerContent = (
        <>
          <h1>Studio Rewind</h1>
          <p>Un studio dédié aux créateurs exigeants.</p>
        </>
      )
      break
  }

  return (
    <>
      <Header>
        {headerContent}
      </Header>

      <Outlet />

      <Footer />
    </>
  )
}
