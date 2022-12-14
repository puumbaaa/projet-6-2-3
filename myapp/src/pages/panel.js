import Menu from "../components/menu";
import Modalupdate from "../components/modal";
import ModalAdd from "../components/modalAdd";
import Footer from "../components/footer";
import React,{useEffect,useState} from "react";
import { getAll,deletePokemon} from "../pokemon";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css'
function Panel(props){
    const [ pokemons, setPokemon ] = useState([]);
    function refreshPage() {
      window.location.reload(false);
    }

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemon(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="back">
        <Menu/>
        <h1 className="text-center font">Management panel</h1>
        
        <Container>
          <Row><Col md={4}><ModalAdd/></Col></Row>
      <Row>
      {
        pokemons.map((pokemon,key) =>{
          return <Col md={4}>
            <div key={key}>
            <Card style={{ width: '18rem' }} className="text-center card card-space">
            <Card.Img className="pokSize img-card" variant="top" src={pokemon.img} alt="test" />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Button variant="danger" onClick={()=>deletePokemon(pokemon) && refreshPage()}>Delete</Button>
              <Modalupdate pokemon={pokemon}/>
            </Card.Body>
          </Card></div>
        </Col>
        })
        
      }
      </Row>
    </Container>
    <Footer/>
    </div>; 
}



export default Panel;
