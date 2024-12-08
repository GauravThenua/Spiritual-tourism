import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Intro from './Components/IntroductionBox/Intro';
import Essential from './Components/EssentialGuide/Essential';
import Expert from "./Components/ExpertAdvice/Expert";
import PlaceDesc from './Components/PlaceDesc/PlaceDesc';
import Videos from './Components/Videos/Videos';
import Fotter from './Components/Fotter/Fotter';
import HelpPage from './Components/ExpertAdvice/ExpertAdvicePage/HelpPage';
import TemplesPage from './Components/EssentialGuide/ExpertAdvicePage/TemplesPage';
import Navigation from './Components/Navigation/Navigation';
import Map from './Components/Map/Map';
import BestPlacePage from './Components/PlaceDesc/BestPlacePage/BestPlacePages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Intro />
            <Essential />
            {/* <Essential /> */}
            <PlaceDesc />
            <Expert />
            <Videos />
            {/* <Navigation /> */}
            <Fotter />
          </>
        } />

        <Route path="/Temples" element={
          <>
            <Navbar />
            <TemplesPage />
            <Fotter />
          </>
        } />

        <Route path="/SomePlaces" element={
          <>
            <Navbar />
            <BestPlacePage />
            <Fotter />
          </>
        } />

        <Route path="/HelpPage" element={
          <>
            <Navbar />
            <HelpPage />
            <Fotter />
          </>
        } />

        {/* <Route path="/Map" element={<Map />} /> */}

      </Routes>
    </Router>
  );
};

export default App;
