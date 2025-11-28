import './Formules.css'
import { FilePlay, User, Scissors, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

function Formules(){

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = (direction: 'prev' | 'next') => {
        if (!sliderRef.current) return;
        const container = sliderRef.current;
        const scrollAmount = container.clientWidth * 0.9; // ~une carte

        container.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    };

    return(
        <section className="formules">
            <div className="formules-header">
                <h2 className="section-title">
                    “Enregistrez, montez et publiez des podcasts de qualité professionnelle dans notre studio haut de gamme” 
                </h2>
                <p>
                    Découvrez nos offres flexibles conçues pour répondre aux besoins de chaque créateur, du novice au professionnel aguerri
                </p>
            </div>

            {/* 🔽 wrapper slider + flèches */}
            <div className="formules-slider">
                <button
                    className="formules-arrow formules-arrow-left"
                    type="button"
                    onClick={() => handleScroll('prev')}
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="formule-cards" ref={sliderRef}>
                    <div className="formule formule1">
                        <h4>Réservation autonome</h4>
                        <p className="formule-desc">
                            {"Tourner en studio, récupérer les rushes, gérer vous même le montage"
                                .split(",")
                                .map((part, i) => (
                                <span key={i}>
                                    {part.trim()}
                                    {i < 2 && <br />}
                                </span>
                                ))
                            }
                        </p>
                        <p className="price">100€ <span>TTC/heure</span></p>
                        <button className="btn btn-primary">Réserver votre session</button>
                        <div className="formule-options">
                            <p><FilePlay /> Rushes videos & audio</p>
                            <p><User /> Rushes videos & audio</p>
                        </div>
                    </div>
                
                    <div className="formule formule2">
                        <h4>Formule améliorée</h4>
                        <p className="formule-desc">
                            Enregistrer avec un podcasteur qui vous accompagne
                        </p>
                        <p className="price">300€ <span>TTC/heure</span></p>
                        <button className="btn btn-primary">Réserver votre session</button>
                        <div className="formule-options">
                            <p><FilePlay /> Rushes videos & audio</p>
                            <p><User /> Un podcasteur à vos côtés</p>
                            <p><Scissors  /> Montage vidéo professionnel sous 72h</p>
                        </div>
                    </div>

                    <div className="formule formule3">
                        <h4>Abonnement annuel</h4>
                        <p className="formule-desc">
                            Réserver jusqu'à 5h par mois à tarif préférentiel toute l'année
                        </p>
                        <p className="price">800€ <span>TTC/mois</span></p>
                        <button className="btn btn-primary">Réserver votre session</button>
                        <div className="formule-options">
                            <p><FilePlay /> Rushes videos & audio</p>
                            <p><User /> Un podcasteur à vos côtés</p>
                            <p><Scissors  /> Montage vidéo professionnel sous 72h</p>
                        </div>
                    </div>
                </div>

                <button
                    className="formules-arrow formules-arrow-right"
                    type="button"
                    onClick={() => handleScroll('next')}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    )
}

export default Formules;
