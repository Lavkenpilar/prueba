import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Prueba = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src='public\kriska.jpg'/>
    <Card.Body>
      <Card.Title>Aprovecha esta oportunidad para hacer un gran regalo</Card.Title>
      </Card.Body>
      <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
     </Card.Body>
  </Card>
  )
}

export default Prueba