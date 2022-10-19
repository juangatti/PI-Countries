import React from 'react'
import Card from '../Card/card'
import { useSelector } from 'react-redux'
import Nav from "../Nav/nav"
import styles from "./countryfiltered.module.css"



export default function CountryFiltered() {

  const match = useSelector((state) => state.allCountries)

  const copyMatch = useSelector((state) => state.countriesLoaded)






  return (
    <div>
      <Nav />
      <div className={styles.SearchContainer}>
        <div className={styles.TitleContainer} >
          <h1> Results:</h1>
        </div>
        {(copyMatch.length === match.length) 
        ?
        <>
          <h1> Country Not Found</h1>
          </> 
          :
          <div className={styles.CardContainer} >
            {match &&
              match.map((e) => {
                return (
                  <Card
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    flag={e.flag}
                    region={e.region}
                    activities={e.activities}
                  />
                );
              })}
          </div>
        }
      </div>
    </div>
  );
}