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

//https://www.youtube.com/watch?v=Aa-H4eJ-doU

//             <Button variant="danger">
//                 <a className="youTubeLink" href="https://www.youtube.com/watch?v=Aa-H4eJ-doU" target="_blank" rel="noopener noreferrer">Obejrzyj na YouTube</a>
//             </Button>

//            <Card.Button variant="danger">{props.button}</Card.Button>
