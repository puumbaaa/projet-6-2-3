import Menu from "../components/menu";
import Footer from "../components/footer";
import React,{useEffect,useState} from "react";
import { getAllp,deletePokedex } from "../pokemon";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
function Pokedex(props){
    const [ pokedexs, setPokedex ] = useState([]);
    function refreshPage() {
      window.location.reload(false);
    }
    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokedexsFetched = getAllp();
    pokedexsFetched
        .then(result => setPokedex(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    console.log(pokedexs)
    return <div className="back">
    <Menu/>
    <h1 className="text-center font">Pokedex</h1>
    <Container>
      <Row>
      {
        pokedexs.map((pokedex,key) =>{
          return <Col md={4}>
            <div key={key}>
            <Card style={{ width: '18rem' }} className="text-center card-space">
            <Card.Img className="pokSize img-card" variant="top" src={pokedex.img} alt="test" />
            <Card.Body>
              <Card.Title>{pokedex.name}</Card.Title>
              <Button variant="danger" onClick={()=>deletePokedex(pokedex) && refreshPage()}>Release</Button>
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

export default Pokedex;