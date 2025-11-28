import { UserRound, MoveRight, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation (){


    return (
        <>
            <Menu className="menu-icon" />

            <nav className="navigation">
                <Link className="navigation_link" to="/about-us">Notre studio</Link>
                <Link className="navigation_link" to="/nos-formules">Nos Formule</Link>
                <Link className="navigation_link" to="/contact">Contact</Link>
                <button className="btn btn-secondary">Réserver <MoveRight /></button>
                <Link className="navigation_link" to="/contact"><UserRound /></Link>
            </nav>
        </>
    )

}


export default Navigation