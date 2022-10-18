import './App.css';
import React from "react"
import { Route, Routes } from "react-router-dom"
import { LandingP } from './components/LandingPage/landingpage';
import Home from './components/Home/home';
import CountryDetails from './components/CountryDetail/countryDetail';
import CountryFiltered from './components/CountryFiltered/countryFiltered'
import ActivityCreate from './components/Activity/activityForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<LandingP />} />
        <Route  path="/countries" element={<Home />} />
        <Route  path="/activities" element={<ActivityCreate />} />
        <Route  path="/countries/details/:id" element={<CountryDetails />} />
        <Route  path="/countries/search" element={<CountryFiltered />} />
      </Routes>

    </div>
  );
}

export default App;
