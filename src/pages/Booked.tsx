import './Booked.css';
import Footer from '../components/Footer/Footer';
import StepOne from '../components/Booking/StepOne';
import StepTwo from '../components/Booking/StepTwo';
import StepThree from '../components/Booking/StepThree';
import { Link, useSearchParams } from 'react-router-dom';

function Booked() {
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step') || '1';
  const formula = searchParams.get('formula');

  return (
    <section className="booking">
      <header className="booked-header">
        <div className="booked-menu">
          <Link to="/">
            <img
              src="/images/logo-header.png"
              alt="Logo Studio Rewind"
              className="logo-header"
            />
          </Link>
        </div>
      </header>

      {step === '1' && <StepOne />}

      {step === '2' && <StepTwo formula={formula} />}

      {step === '3' && <StepThree />}

      {step !== '1' && step !== '2' && step !== '3' && (
        <main className="booked-main">
          <p>Étape inconnue</p>
        </main>
      )}

      <Footer />
    </section>
  );
}

export default Booked;
