import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './StepThree.css';

const StepThree = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const formula = searchParams.get('formula');
  const dateParam = searchParams.get('date');
  const startTime = searchParams.get('start') || '';
  const endTime = searchParams.get('end') || '';

  const selectedDate = dateParam ? new Date(dateParam) : null;

  // ====== IMAGE / LABEL FORMULE ======
  const getFormulaVisual = () => {
    if (formula === 'autonome') {
      return {
        src: '/images/formule1.jpg',
        alt: 'Formule autonome',
        title: 'Formule autonome',
        priceLabel: '100€ / heure',
      };
    }
    if (formula === 'amelioree') {
      return {
        src: '/images/formule2.jpg',
        alt: 'Formule améliorée',
        title: 'Formule améliorée',
        priceLabel: '300€ / heure',
      };
    }
    if (formula === 'abonnement') {
      return {
        src: '/images/abonnement.jpg',
        alt: 'Abonnement mensuel',
        title: 'Abonnement mensuel',
        priceLabel: '800€ / mois',
      };
    }
    return null;
  };

  const formulaVisual = getFormulaVisual();

  // ====== CALCUL HEURES ======
  let bookedHours: number | null = null;
  if (startTime && endTime) {
    const [sh] = startTime.split(':').map(Number);
    const [eh] = endTime.split(':').map(Number);
    const diff = eh - sh;
    bookedHours = diff > 0 ? diff : 0;
  }

  // ====== TARIFS HT ======
  let hourlyRate: number | null = null;
  if (formula === 'autonome') hourlyRate = 83.33;   // 83.33€ HT / h
  if (formula === 'amelioree') hourlyRate = 250;    // 250€ HT / h

  const abonnementPriceHT = 800; // HT / mois
  const TVA_RATE = 0.2;

  const safeHourlyRate = hourlyRate ?? 0;
  const safeBookedHours = bookedHours ?? 0;

  // Montant HT (tournage ou abonnement)
  const totalHT =
    formula === 'abonnement'
      ? abonnementPriceHT
      : safeHourlyRate * safeBookedHours;

  const tvaAmount = totalHT * TVA_RATE;
  const totalTTC = totalHT + tvaAmount;

  // mode formulaire : "register" ou "login"
  const [mode, setMode] = useState<'register' | 'login'>('register');
  // type de client : particulier ou pro (pour le mode register)
  const [customerType, setCustomerType] = useState<'particulier' | 'pro'>(
    'particulier'
  );

  // champs formulaire (on ne branche pas encore au backend)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [extraRequest, setExtraRequest] = useState('');

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptMarketing, setAcceptMarketing] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginExtraRequest, setLoginExtraRequest] = useState('');

  const handleClearCart = () => {
    // on vide le "panier" en revenant à l'étape 1 sans params
    navigate('/reservation?step=1');
  };
  const handlePreviousStep = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (formula === 'abonnement') {
      params.set('step', '1');
      params.delete('date');
      params.delete('start');
      params.delete('end');
    } else {
      params.set('step', '2');
    }
    navigate('/reservation?' + params.toString());
  };

  const handleProceedPayment = () => {
    // pour l'instant on empêche juste le submit/reload
    console.log('Proceed to payment clicked', {
      mode,
      formula,
      date: selectedDate,
      startTime,
      endTime,
    });
  };

  return (
    <main className="booked-main booked-main-step3">
      <h2>Récapitulatif de votre réservation</h2>

      {/* RÉCAP PANIER */}
      <section className="cart-summary">
        <div className="cart-summary-main">
          {/* Visuel formule (image + libellé) */}
          {formulaVisual && (
            <div className="cart-summary-visual">
              <img
                src={formulaVisual.src}
                alt={formulaVisual.alt}
                className="cart-summary-image"
              />
            </div>
          )}
        </div>
        <div className="recaps">
          <div className="car-summary-recap">
            <div>
                {formula && (
                  <p>
                    Formule : <strong>{formula}</strong>
                  </p>
                )}

                {selectedDate && (
                  <p>
                    Date :{' '}
                    <strong>{selectedDate.toLocaleDateString('fr-FR')}</strong>
                  </p>
                )}
            </div>
            <div>    
                {startTime && endTime && (
                  <p>
                    Créneau :{' '}
                    <strong>
                      {startTime} - {endTime}
                    </strong>
                  </p>
                )}
              
            
                {bookedHours !== null && formula !== 'abonnement' && (
                  <p>
                    Nombre d'heures : <strong>{bookedHours}</strong>
                  </p>
                )}
            </div>
          </div>  
          
          <div className="cart-summary-actions">
            <Link className="" to="/reservation?step=1">
              Modifier  
            </Link>
            <button
              type="button"
              className="cart-clear-btn"
              onClick={handleClearCart}
            >
              Supprimer 
            </button>
          </div>
        </div>
        <div className="recap-prices">
          {/* Détail prix pour les formules à l'heure */}
                {formula !== 'abonnement' && (
                  <>
                    <p>
                      Prix total HT :{' '}
                      <strong>{totalHT.toFixed(2)} €</strong>
                    </p>
                    <p>
                      TVA (20%) :{' '}
                      <strong>{tvaAmount.toFixed(2)} €</strong>
                    </p>
                    <p>
                      Prix total TTC :{' '}
                      <strong>{totalTTC.toFixed(2)} €</strong>
                    </p>
                  </>
                )}

                {/* Abonnement : HT + TVA + TTC / mois */}
                {formula === 'abonnement' && (
                  <>
                    <p>
                      Prix abonnement HT :{' '}
                      <strong>{abonnementPriceHT.toFixed(2)} € / mois</strong>
                    </p>
                    <p>
                      TVA (20%) :{' '}
                      <strong>{(abonnementPriceHT * TVA_RATE).toFixed(2)} €</strong>
                    </p>
                    <p>
                      Prix abonnement TTC :{' '}
                      <strong>
                        {(abonnementPriceHT * (1 + TVA_RATE)).toFixed(2)} € / mois
                      </strong>
                    </p>
                  </>
                )}
        </div>
      </section>

      {/* FORMULAIRE CLIENT */}
      <section className="customer-section">
        {mode === 'register' && (
          <>
            <header className="customer-header">
              <h3>Nouveau client</h3>
              <button
                type="button"
                className="link-like"
                onClick={() => setMode('login')}
              >
                Vous êtes déjà client ? Connectez-vous
              </button>
            </header>

            {/* Onglets particulier / pro */}
            <div className="customer-tabs">
              <button
                type="button"
                className={
                  'customer-tab' +
                  (customerType === 'particulier' ? ' active' : '')
                }
                onClick={() => setCustomerType('particulier')}
              >
                Particulier
              </button>
              <button
                type="button"
                className={
                  'customer-tab' + (customerType === 'pro' ? ' active' : '')
                }
                onClick={() => setCustomerType('pro')}
              >
                Professionnel
              </button>
            </div>

            <form
              className="customer-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-row">
                <label htmlFor="registerEmail">Email</label>
                <input
                  id="registerEmail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="registerPassword">Mot de passe</label>
                <input
                  id="registerPassword"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="registerPasswordConfirm">
                  Confirmation du mot de passe
                </label>
                <input
                  id="registerPasswordConfirm"
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>

              {customerType === 'particulier' && (
                <>
                  <div className="form-row">
                    <label htmlFor="firstName">Prénom</label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="lastName">Nom</label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </>
              )}

              {customerType === 'pro' && (
                <>
                  <div className="form-row">
                    <label htmlFor="companyName">
                      Nom de l&apos;entreprise
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="vatNumber">Numéro de TVA</label>
                    <input
                      id="vatNumber"
                      type="text"
                      value={vatNumber}
                      onChange={(e) => setVatNumber(e.target.value)}
                    />
                  </div>
                </>
              )}

              <div className="form-row">
                <label htmlFor="phone">Numéro de téléphone</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="extraRequest">Demande supplémentaire</label>
                <textarea
                  id="extraRequest"
                  value={extraRequest}
                  onChange={(e) => setExtraRequest(e.target.value)}
                />
              </div>

              <div className="form-row checkbox-row">
                <label>
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                  />
                  <span>
                    J&apos;ai lu et j&apos;accepte les CGU et la Politique de
                    confidentialité. Je consens au traitement de mes données
                    personnelles conformément à cette politique.
                  </span>
                </label>
              </div>

              <div className="form-row checkbox-row">
                <label>
                  <input
                    type="checkbox"
                    checked={acceptMarketing}
                    onChange={(e) => setAcceptMarketing(e.target.checked)}
                  />
                  <span>
                    J&apos;accepte de recevoir des actualités et des offres
                    commerciales par email.
                  </span>
                </label>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="prev-step-btn"
                  onClick={handlePreviousStep}
                >
                  Étape précédente
                </button>
                <button
                  type="button"
                  className="confirm-btn active"
                  onClick={handleProceedPayment}
                >
                  Procéder au paiement
                </button>
              </div>
            </form>
          </>
        )}

        {mode === 'login' && (
          <>
            <header className="customer-header">
              <h3>Connexion</h3>
              <button
                type="button"
                className="link-like"
                onClick={() => setMode('register')}
              >
                Vous n'avez pas de compte ? S'inscrire
              </button>
            </header>

            <form
              className="customer-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-row">
                <label htmlFor="loginEmail">Email</label>
                <input
                  id="loginEmail"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="loginPassword">Mot de passe</label>
                <input
                  id="loginPassword"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="loginExtraRequest">
                  Demande supplémentaire
                </label>
                <textarea
                  id="loginExtraRequest"
                  value={loginExtraRequest}
                  onChange={(e) => setLoginExtraRequest(e.target.value)}
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="prev-step-btn"
                  onClick={handlePreviousStep}
                >
                  Étape précédente
                </button>
                <button
                  type="button"
                  className="confirm-btn active"
                  onClick={handleProceedPayment}
                >
                  Procéder au paiement
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </main>
  );
};

export default StepThree;
