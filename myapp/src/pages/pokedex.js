import Menu from "../components/menu";
import React,{useEffect,useState} from "react";
import { getAllp } from "../pokemon";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
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
    <h1 className="text-center">Pokedex</h1>
    <Container>
      <Row>
      {
        pokedex.map((pokedex,key) =>{
          return <Col md={4}>
            <div key={key}>
            <Card style={{ width: '18rem' }} className="text-center">
            <Card.Img className="pokSize" variant="top" src={pokedex.img} alt="test" />
            <Card.Body>
              <Card.Title>{pokedex.name}</Card.Title>
            </Card.Body>
          </Card></div>
        </Col>
        })
        
      }
      </Row>
    </Container>
</div>;
}

export default Pokedex;