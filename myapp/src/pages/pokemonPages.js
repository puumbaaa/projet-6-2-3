import Menu from "../components/menu";
import React,{useEffect,useState} from "react";
import { getAll,addToPokedex } from "../pokemon";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

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
    return <div className="back">
    <Menu/>
    <h1 className="text-center">Liste de Pokemons</h1>
    <Container>
      <Row>
      {
        pokemons.map((pokemons,key) =>{
          return <Col md={4}>
            <div key={key}>
            <Card style={{ width: '18rem' }} className="text-center card">
            <Card.Img className="pokSize" variant="top" src={pokemons.img} alt="test" />
            <Card.Body>
              <Card.Title>{pokemons.name}</Card.Title>
              <Button variant="danger" onClick={()=>addToPokedex(pokemons)}>Capturer !</Button>
            </Card.Body>
          </Card></div>
        </Col>
        })
        
      }
      </Row>
    </Container>
    
</div>;
}

export default Pokemon;