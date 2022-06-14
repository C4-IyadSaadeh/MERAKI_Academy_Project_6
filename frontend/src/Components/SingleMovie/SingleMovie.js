import React from 'react'
import { Button, Modal, Row,Col, ListGroup } from 'react-bootstrap'
import {AiFillStar} from 'react-icons/ai';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
export default function SingleMovie({show,onHide,movie}) {
    const navigate=useNavigate();
  return (
    <div>
       <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header style={{backgroundColor:'black'}}>

           <iframe
            width="100%"
            height="500"
            src={movie.trailer}
          ></iframe>
           
       
      </Modal.Header>
      <Modal.Body style={{backgroundColor:'black'}}>
      <h4>{movie.title}</h4>
          
          <ListGroup horizontal >
  <ListGroup.Item style={{backgroundColor:'black',border:'none',color:'yellow'}}><AiFillStar/>{' '}{movie.rating}</ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:'black',border:'none',color:'white'}}>{movie.duration}</ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:'black',border:'none',color:'yellow'}}>{movie.quality}</ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:'black',border:'none',color:'white'}}>{movie.genre}</ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:'black',border:'none',color:'white'}}><Button  style={{backgroundColor:'black',border:'none',color:'white'}} onClick={()=>{navigate(`/FullMovie/${movie.id}`)}}>Play Movie</Button></ListGroup.Item>
</ListGroup>
        

        <p>
          {movie.description}
        </p>
      </Modal.Body>
      
    </Modal>
    </div>
  )
}
