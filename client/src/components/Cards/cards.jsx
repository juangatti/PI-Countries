import React from "react"
import Cardx from '../Card/card'
import s from './cards.module.css'




export default function Cards({currentCountry}) {    

    

    return (      
        <div className={s.CardContainer} >
            {currentCountry && currentCountry.map((e) => {
                return (<Cardx key={e.id} id={e.id} region={e.region} flag={e.flag} name={e.name} />)
            })}
            
        </div>
    )
}