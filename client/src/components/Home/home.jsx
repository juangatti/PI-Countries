import React from "react"
import Cards from "../Cards/cards"
import Nav from "../Nav/nav"
import './home.css'
import styles from './home.module.css'
export default function Home() {
    return (
        <div>
            <Nav />
            <div className={`${styles.cardsContainer}`}>
                <Cards />
            </div>
        </div>
    )
}