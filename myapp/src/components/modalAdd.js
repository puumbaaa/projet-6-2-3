import React,{useState} from "react";
import {addPokemon } from "../pokemon";
import Button from 'react-bootstrap/Button';
import {useForm} from'react-hook-form';
import Modal from 'react-bootstrap/Modal';
function ModalAdd(){
    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function refreshPage() {
      window.location.reload(false);
    }
        const onSubmit = (data) => {
          console.log(data)
          addPokemon(data);
        }

    return<>
    
        <Button variant="primary" onClick={handleShow}>
        Add Pokemon
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Pokemon</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} placeholder="Pokemon's id (ex:001)"></input>
        <input {...register("name")} placeholder="Pokemon's name"  />
        <input {...register("img")} placeholder="link of the image"/>
        <Button type="submit" onClick={refreshPage}>Submit</Button>
        </form>
        </Modal>
    
    </>
    };


export default ModalAdd;
