import React from "react";
import './FightCard.css';
import {Card, Button} from "react-bootstrap";


const FightCard = (props) => {


    return(
        <Card className='card'>
            <Card.Img src={props.image}/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Button variant="danger">{props.button}</Button>
        </Card.Body>
    </Card>
    );
};

export default FightCard;
