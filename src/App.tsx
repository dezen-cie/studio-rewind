import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Team from './pages/Team'
import Booked from './pages/Booked'
import Layout from "./components/Layout/Layout";


function App() {

  return (
    <>
     <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Team />} />
        </Route>
        <Route path="/reservation" element={<Booked />} />
      </Routes>
    </>
  )
}

export default App
