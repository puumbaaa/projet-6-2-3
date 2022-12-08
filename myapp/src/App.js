import React from "react";
import{ BrowserRouter as Router,
Switch,
Route} from "react-router-dom";
import Index from "./pages/home";
import Pokemon from "./pages/pokemonPages";
import Pokedex from "./pages/pokedex";


function App(props){
  return <Router>
      <Switch>
        <Route exact path="/index"> 
          <Index /> 
        </Route>
        <Route exact path="/pokemon"> 
          <Pokemon /> 
        </Route>
        <Route exact path="/pokedex"> 
          <Pokedex /> 
        </Route>
      </Switch>
  </Router>
}
export default App;