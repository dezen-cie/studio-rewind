import './SimpleMap.css'
import { Contact, Phone, Building2, Mail, Send } from 'lucide-react';

function SimpleMap() {
  return (
    <section className="map-wrapper">
        <h3 className="subtitle">Accès au studio</h3>
        <div className="wrap">
            <div className="map-container a">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1946.75044406743!2d6.479628903740912!3d46.36698851728512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c3fac256f66d1%3A0x9cf893d8c52f9379!2sCosmic%20Comet%20-%20Espaces%20de%20Travail%20%C3%A0%20Thonon-les-Bains!5e0!3m2!1sfr!2sfr!4v1764349188455!5m2!1sfr!2sfr" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
            <div className="grid-center b">
                <p className="access-title">
                    Adresse
                </p>
                <address>
                    Studio Rewind<br/>
                    7 avenue de la libération<br/>
                    74200 Thonon-les-bains
                </address>

                <a href="tel:+33667296965">0667296965</a>
                <a href="mailto:contact@exemple.com?subject=Demande%20info&body=Bonjour">contact@stdio-rewind.fr</a>
                <img src="/images/deventure.png" alt="" />
            </div>
            <div className="contact c">
                <p className="access-title">Une question? Ecrivez-nous</p>
                <form action="" className="form-contact">
                    <div className="input-field">
                        <Contact className="icon" />
                        <input type="text" placeholder="Nom complet" />
                    </div>
                    <div className="input-field">
                        <Phone className="icon" />
                        <input type="tel" placeholder="Téléphone" />
                    </div>
                    <div className="input-field">
                        <Building2 className="icon" />
                        <input type="tel" placeholder="Entreprise" />
                    </div>
                    <div className="input-field">
                        <Mail className="icon" />
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="input-field">
                        <Send className="icon icon-textarea" />
                        <textarea placeholder="Votre message"></textarea>
                    </div>

                    <button type="submit">Envoyer ma demande</button>
                </form>
            </div>
        </div>
    </section>
  );
}

export default SimpleMap


   
