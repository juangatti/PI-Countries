import './App.css';
import React from "react"
import {Route} from "react-router-dom"
import { LandingP } from './components/LandingPage/landingpage';






function App() {
  return (
    <div className="App">
     <Route exact path = "/" component={LandingP} />
     <Route exact path = "/countries" component={"Home"} />
     <Route exact path = "/activities" component={"aca van la creacion de actividades"} />
     <Route exact path = "/countries/:id" component={"pais en detalle"} />
    </div>
  );
}

export default App;
