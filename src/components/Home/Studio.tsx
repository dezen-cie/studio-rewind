import './Studio.css'

function Studio(){

    return(
        <section className="studio">
            <h2 className="subtitle">Notre studio d'enregistrement</h2>

            <div className="studio_text">
                <figure className="studio_img studio_img-main studio_img-main--left">
                    <img src="/images/studio.jpg" alt="Vue du studio avec canapé et lumière" />
                </figure>

                <p>
                Notre studio a été pensé comme un espace où l’on se concentre uniquement sur la création. Tout est organisé pour que l’expérience soit simple, fluide et professionnelle du début à la fin. Dès que l’on entre, on comprend que l’endroit a été conçu pour produire du contenu de qualité sans avoir à se soucier de la technique : l’acoustique est maîtrisée, la lumière est calibrée, et chaque élément du décor a été choisi pour créer une ambiance crédible, chaleureuse et immédiatement “filmable”.
                Les podcasters comme les créateurs vidéo trouvent ici un environnement prêt à l’emploi, avec un matériel déjà réglé, testé, et toujours opérationnel. Les micros captent la voix avec précision, les caméras offrent une image propre et fidèle, et les lumières donnent un rendu constant, quelles que soient les conditions. On peut enregistrer seul, à deux, ou en groupe, sans craindre de manquer d’espace ou de perturber la prise de son.
                </p>

                <figure className="studio_img studio_img-secondary studio_img-secondary--right">
                    <img src="/images/canape.jpg" alt="Fauteuil rouge dans le studio" />
                </figure>

                <p>
                Le studio n’est pas seulement un lieu technique : c’est un endroit confortable où l’on peut se poser, répéter, préparer une interview ou débriefer un tournage. On y travaille dans le calme, avec l’impression d’avoir son propre espace le temps de la session. L’environnement visuel, pensé pour correspondre aux codes du podcast et de la création numérique moderne, permet de tourner immédiatement sans devoir aménager quoi que ce soit.
                Que ce soit pour enregistrer un podcast audio, réaliser une émission filmée, tourner un format court, interviewer un invité ou produire du contenu pour les réseaux sociaux, tout est prêt à être utilisé : il suffit de s’installer, de lancer l’enregistrement et de se concentrer sur ce qui compte vraiment: la création.
                </p>
            </div>
        </section>
    )
}

export default Studio



