import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';



const Tile = (props) => {

    const { name, type, price, image} = props;

    return (
        <Container>
            <Card style={{ width: '18rem' }} className="mb-5 mt-5">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{type}</Card.Text>
                    <Card.Text>{price.symbol}{price.amount}</Card.Text>
                    <Button variant="primary">Add To cart</Button>
                </Card.Body>
            </Card>
        </Container>
            
        )
}

export default Tile;