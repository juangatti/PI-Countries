import React from "react"
import { Link } from "react-router-dom"
import s from "./landingpage.module.css"



export function LandingP() {
    return (
        <div className={s.all}>
            <div className={s.titlec}>
                <h1 className={s.title}>  WorldApp!</h1>
            </div>
            <div className={s.container}>
                <p className={s.text2}>Join us, create your own activities and explore the world...</p>
                <Link to="/countries">
                    <button >Ingresar</button>
                </Link>
            </div>
            <div>
            </div>
        </div>

    )
}