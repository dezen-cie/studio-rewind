import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './Home.css'
import Timeline from '../components/Home/Timeline';
import Studio from '../components/Home/Studio';
import Formules from '../components/Home/Formules';
import Podcasteurs from '../components/Home/Podcasteurs';
import SimpleMap from '../components/Home/SimpleMap';


function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "formules") {
      const el = document.querySelector(".formules");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollTo === "studio") {
      const el = document.querySelector(".studio");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  return (
    <main className="home">
        <Timeline />
        <Studio />
        <Formules />
        <Podcasteurs />
        <SimpleMap />
    </main>
  )
}

export default Home