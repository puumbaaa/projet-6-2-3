import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import{ BrowserRouter as Router,
Switch,
Route} from "react-router-dom";
import Panel from "./pages/panel";
import Pokemon from "./pages/pokemonPages";
import Pokedex from "./pages/pokedex";


function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Pokemon /> 
        </Route>
        <Route exact path="/panel"> 
          <Panel /> 
        </Route>
        <Route exact path="/pokedex"> 
          <Pokedex /> 
        </Route>
      </Switch>
  </Router>
}
export default App;