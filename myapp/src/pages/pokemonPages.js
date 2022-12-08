import Menu from "../components/menu";
import React,{useEffect,useState} from "react";
import { getAll } from "../pokemon";
function Pokemon(props){
    const [ pokemons, setPokemon ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemon(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    console.log(pokemons)
    return <div>
    <Menu/>
    <h1>Pokemon</h1>
    <div>
      {
        pokemons.map((pokemons,key) =>{
          return <div key={key}>
            <img className="avatar" src={pokemons.img} alt="test" width="100px" />
            <h2>{pokemons.name}</h2>
          </div>
        })
      }
     </div>
</div>;
}

export default Pokemon;