import './App.css';
import React from "react"
import {Route} from "react-router-dom"
import { LandingP } from './components/LandingPage/landingpage';
import Home from './components/Home/home';
import CountryDetails from './components/CountryDetail/countryDetail';
import CountryFiltered from './components/CountryFiltered/countryFiltered'
import  ActivityCreate from './components/Activity/activityForm';


function App() {
  return (
    <div className="App">
     <Route exact path = "/" component={LandingP} />
     <Route exact path = "/countries" component={Home} />
     <Route exact path = "/activities" component={ActivityCreate} />
     <Route exact path = "/countries/details/:id" component={CountryDetails} />
     <Route exact path = "/countries/search" component={CountryFiltered} />
     
    </div>
  );
}

export default App;
