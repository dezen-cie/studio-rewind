import { Link } from 'react-router-dom'
import './Podcasteurs.css'

function Podcasteurs(){

    return(
        <section className="podcasteurs">
            <div className="casting-text">
                <h3 className="subtitle">Nos podcasteurs vous accompagnent</h3>
                <p>Choisissez quel podcasteurs vous voulez pour vous accompagner durant votre session</p>
            </div>
            <div className="casting-video">
                <Link className="casting_link" to="/team">Podcasteur 1</Link> 
                <span className="casting_label">Podcasteur 1</span>
                <video autoPlay muted loop playsInline>
                    <source src="/videos/video-podcasteur1.mp4" type="video/mp4"/>
                </video> 
            </div>
            <div className="casting-video">
                <Link className="casting_link" to="/team">Podcasteur 2</Link> 
                <span className="casting_label">Podcasteur 2</span>
                <video autoPlay muted loop playsInline>
                    <source src="/videos/video-podcasteur2.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="casting-video">
                <Link className="casting_link" to="/team">Podcasteur 3</Link> 
                <span className="casting_label">Podcasteur 3</span>
                <video autoPlay muted loop playsInline>
                    <source src="/videos/video-podcasteur3.mp4" type="video/mp4"/>
                </video> 
            </div>
        </section>
    )
}

export default Podcasteurs