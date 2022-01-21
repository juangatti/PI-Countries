import React from "react"
import { Link } from "react-router-dom"
import styles from './card.module.css'
import { Grid } from '@nextui-org/react';
import { Card } from '@nextui-org/react';



export default function Cardx(props) {
    return (
        <Grid xs={4}>
            <Link className={styles.center} to={`/countries/details/${props.id}`}  >
                <Card width="55%" justify="center" alignItems="center" direction="column">
                        <h4 className={styles.title}>  {props.id} </h4>
                        <img src={props.flag} alt="Flag not found" width="150px" height="100px" />
                        <p className={styles.continent}> {props.name}</p>
                </Card>
            </Link>
    </Grid>
    )
}