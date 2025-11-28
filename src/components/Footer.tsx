import './Footer.css';
import FAQ from './Footer/Faq'
import FooterInner from './Footer/FooterInner'

function Footer(){
  
  return (
    <>
      <footer className="footer">
        <FAQ />
        <FooterInner />
      </footer>
    </>
  );
}

export default Footer;
