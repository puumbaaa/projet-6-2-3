import React,{useState} from "react";
import {updatePokemon } from "../pokemon";
import Button from 'react-bootstrap/Button';
import {useForm} from'react-hook-form';

import Modal from 'react-bootstrap/Modal';
function Modalupdate(props){
    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function refreshPage() {
      window.location.reload(false);
    }
        const onSubmit = (data) => {
          console.log(data)
          updatePokemon(data);
        }

    return<>
    
        <Button variant="primary" onClick={handleShow}>
        Update
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Update Pokemon</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} defaultValue={props.pokemon.id}></input>
        <input {...register("name")} placeholder="Pokemon's name" defaultValue={props.pokemon.name} />
        <input {...register("img")} placeholder="link of the image" defaultValue={props.pokemon.img}/>
        <Button variant="danger" type="submit" onClick={refreshPage}>Submit</Button>
        </form>
        </Modal>
    
    </>
    };


export default Modalupdate;
