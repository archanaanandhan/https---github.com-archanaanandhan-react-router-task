import React from 'react'
import Card from 'react-bootstrap/Card';
function Box({cardData}) {
  return<>
    <Card style={{ width: '20rem', height: '480px'  }} className="mb-4 g-10 h-">
      <Card.Img variant="top" src={cardData.image} />
      <Card.Body>
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text>
        {cardData.discription}
        </Card.Text>
       
       
      </Card.Body>
    </Card>
  </>
}

export default Box