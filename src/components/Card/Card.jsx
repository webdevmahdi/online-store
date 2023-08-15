import React from 'react'
import { Card } from 'react-bootstrap'

function FullCard(props) {
    let {name, colour, price, image} = props.product;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h4>{colour}</h4>
                        <strong>{price}</strong>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default FullCard