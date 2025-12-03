import { useState } from 'react';
import './StepTow.css';
import { Calendar, Clock } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import BookingCalendar from './BookingCalendar';
import TimeRangeInputs from './TimeRangeInputs';

type StepTwoProps = {
  formula: string | null;
};

const StepTwo = ({ formula }: StepTwoProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const dateParam = searchParams.get('date');
  const startParam = searchParams.get('start') || '';
  const endParam = searchParams.get('end') || '';

  const [selectedDate, setSelectedDate] = useState<Date | null>(() =>
    dateParam ? new Date(dateParam) : null
  );
  const [startTime, setStartTime] = useState<string>(() => startParam);
  const [endTime, setEndTime] = useState<string>(() => endParam);

  // ====== CALCUL HOURS ======
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
  if (formula === 'amelioree') hourlyRate = 250; // 250€ HT / h

  const abonnementPrice = 800; // HT / mois
  const TVA_RATE = 0.2;

  const safeHourlyRate = hourlyRate ?? 0;
  const safeBookedHours = bookedHours ?? 0;

  // montant HT du tournage (ou abonnement)
  const totalHT =
    formula === 'abonnement'
      ? abonnementPrice
      : safeHourlyRate * safeBookedHours;

  const tvaAmount = totalHT * TVA_RATE;
  const totalTTC = totalHT + tvaAmount;

  // ====== VALIDATION BOUTON ======
  const canConfirm =
    formula === 'abonnement'
      ? true
      : selectedDate !== null &&
        startTime !== '' &&
        endTime !== '' &&
        bookedHours !== null &&
        bookedHours > 0;

  const handleConfirm = () => {
    if (!canConfirm) return;

    const params = new URLSearchParams();
    params.set('step', '3');
    if (formula) params.set('formula', formula);

    if (selectedDate) {
      params.set('date', selectedDate.toISOString());
    }
    if (startTime) params.set('start', startTime);
    if (endTime) params.set('end', endTime);

    navigate('/reservation?' + params.toString());
  };

  return (
    <main className="booked-main">
      <h2>Choisir votre date</h2>

      <div className="booked-step2">
        <BookingCalendar value={selectedDate} onChange={setSelectedDate} />

        <div className="recap">
          {/* RÉCAP EN HAUT : toujours TTC */}
          <div className="recap-price">
            <p>Récapitulatif</p>
            <p className="totalPrice color">€ {totalTTC.toFixed(2)}</p>
          </div>

          {formula && (
            <p>
              Formule choisie : <strong>{formula}</strong>
            </p>
          )}

          <div className="recap-infos">
            {selectedDate && (
                <p className="flex-align">
                <Calendar /> 
                Date choisie :{' '}
                <strong>{selectedDate.toLocaleDateString('fr-FR')} </strong>
                à {startTime}h
                </p>
            )}

            {bookedHours !== null && formula !== 'abonnement' && (
                <p className="flex-align">
                <Clock />
                Durée <strong>{bookedHours}h</strong>
                </p>
            )}
           </div>

          {/* DÉTAIL PRIX POUR LES FORMULES À L'HEURE */}
          {formula !== 'abonnement' && (
            <>
                <div className="recap-infos padding">
                <p className="flex-align flex-split">
                    Tournage ({bookedHours} heure) {' '} 
                    <span>€ {totalHT.toFixed(2)}</span>
                </p>
                <p className="flex-align flex-split small">
                    TVA (20%) {' '}
                    <span>€ {tvaAmount.toFixed(2)}</span>
                </p>
                </div>
                <p className="flex-align flex-split padding color">
                    Total TTC :{' '}
                    <strong>€ {totalTTC.toFixed(2)}</strong>
              </p>
            </>
          )}


          <div className="booked-actions">
            <button
              className={`btn btn-primary ${canConfirm ? 'active' : 'disabled'}`}
              onClick={handleConfirm}
              disabled={!canConfirm}
            >
              Confirmer
            </button>

            <Link className="btn-precedent" to="/reservation?step=1">
                Revenir au choix de la formule
            </Link>
          </div>
        </div>

        {formula !== 'abonnement' && (
          <TimeRangeInputs
            startTime={startTime}
            endTime={endTime}
            onChangeStart={setStartTime}
            onChangeEnd={setEndTime}
          />
        )}
      </div>
    </main>
  );
};

export default StepTwo;
