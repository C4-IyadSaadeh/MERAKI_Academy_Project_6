import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import SingleMovie from './SingleMovie'
export default function ({movie,key}) {
  const [modalShow, setModalShow] = useState(false);
  const index=key;
  return (
    <div>
        <Card style={{ width: '18rem', height: '17rem',backgroundColor:'black'}}>
  <Card.Img style={{ width: '18rem', height: '13rem'}} variant="top" src={movie.image} onClick={()=>{setModalShow(true)}}/>
  <Card.Title>{movie.title}</Card.Title>
 
</Card>
<SingleMovie
        show={modalShow}
        onHide={() => setModalShow(false)}
        movie={movie}
        key={index}
      />
    </div>
  )
}
