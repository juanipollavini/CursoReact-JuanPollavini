import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
export const ProductCard = () => {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Cerveza Lager</Card.Title>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <ItemCount stock="5"/>
        </div>
    )
}

export default ProductCard;