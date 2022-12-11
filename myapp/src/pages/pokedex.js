import Menu from "../components/menu";
import React,{useEffect,useState} from "react";
import { getAllp,addToPokedex } from "../pokemon";
function Pokedex(props){
    const [ pokedex, setPokedex ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokedexFetched = getAllp();
    pokedexFetched
        .then(result => setPokedex(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    console.log(pokedex)
    return <div>
    <Menu/>
    <h1>Pokedex</h1>
    <div>
      {
        pokedex.map((pokedex,key) =>{
          return <div key={key}>
            <img className="avatar" src={pokedex.img} alt="test" width="100px" />
            <h2>{pokedex.name}</h2>
          </div>
        })
      }
     </div>
</div>;
}

export default Pokedex;