import React from "react"
import { Link } from "react-router-dom"
import styles from './card.module.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function Cardx(props) {
    return (
        < >
                <Card style={{ width: '18rem'}} >
            <Link className={styles.center} to={`/countries/details/${props.id}`}  >
                    <Card.Body>
                        <Card.Title>  {props.id} </Card.Title>
                        <Card.Img src={props.flag} alt="Flag not found" />
                        <Card.Text> {props.name}</Card.Text>
                    </Card.Body>
            </Link>
                </Card>
    </>
    )
}