import React from "react"
import { Link } from "react-router-dom"
import styles from './card.module.css'




export default function Card(props) {
    console.log(props)
    return (
        <div className={`${styles.cardWrapper}`}> 

            <Link to={`/countries/details/${props.id}`}  >
                <div className="card-body"   >
                    <h4 className={`${styles.title}`}>  {props.id} </h4>
                    <img src={props.flag} alt="Flag not found" width="150px" height="100px" />
                    <p className={`${styles.continent}`}> Continent: {props.region}</p>
                </div>
            </Link>
        </div>
    )
}