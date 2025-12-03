import { Link } from 'react-router-dom';

const StepOne = () => {
  return (
    <main className="booked-main">
      <h2>Sélectionner votre formule</h2>
      <div className="booked-formules">
        <article className="booked-formule">
          <img src="/images/formule1.jpg" alt="" />
          <div>
            <div>
              <p>Formule autonome</p>
              <p>100€/heure</p>
            </div>
            <Link
              className="select"
              to="/reservation?step=2&formula=autonome"
            >
              Sélectionner
            </Link>
          </div>
        </article>

        <article className="booked-formule">
          <img src="/images/formule2.jpg" alt="" />
          <div>
            <div>
              <p>Formule améliorée</p>
              <p>300€/heure</p>
            </div>
            <Link
              className="select"
              to="/reservation?step=2&formula=amelioree"
            >
              Sélectionner
            </Link>
          </div>
        </article>

        <article className="booked-formule">
          <img src="/images/abonnement.jpg" alt="" />
          <div>
            <div>
              <p>Abonnement mensuel</p>
              <p>800€/mois</p>
            </div>
            {/* tu as dit que l'abonnement va direct en step 3 plus tard */}
            <Link
              className="select"
              to="/reservation?step=3&formula=abonnement"
            >
              Sélectionner
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
};

export default StepOne;
