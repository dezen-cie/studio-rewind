import { Link } from 'react-router-dom';
import './Logo.css'

function Logo(){

    return(
        <Link className="header-logo_link" to="/">
            <img src="/images/logo-header.png" alt="Logo Studio Rewind" className="logo-header"/>
        </Link>
    )
}

export default Logo