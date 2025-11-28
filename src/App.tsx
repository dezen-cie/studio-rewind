import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Team from './pages/team';
import Contact from './pages/contact';
import AboutUs from './pages/about-us';
import Tarifs from './pages/nos-tarifs';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          {/* Page d’accueil */}
          <Route path="/" element={<Home />} />

          {/* Page Team */}
          <Route path="/team" element={<Team />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/nos-tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
