import React from "react"
import { Link } from "react-router-dom"
import styles from './card.module.css'



export default function Cardx(props) {
    return (
        < >
                <div className={styles.cardWrapper}>
            <Link className={styles.CardLink}to={`/countries/details/${props.id}`}  >
                    <div className='cardBody'>
                        <h4 className={styles.title} >  {props.name} </h4>
                        <img src={props.flag} alt="Flag not found" className={styles.imagen} />
                        <h3 className={styles.title} > {props.region}</h3>
                    </div>
            </Link>
                </div>
    </>
    )
}