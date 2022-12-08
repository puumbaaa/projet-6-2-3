import React from "react";
import { Link } from "react-router-dom";
function Menu(){
  return <nav>
      <ul>
          <li><Link to="/index">Accueil</Link></li>
          <li><Link to="/pokemon">Pokemon</Link></li>
          <li><Link to="/pokedex">Pokedex</Link></li>
      </ul>
  </nav>
}



export default Menu;