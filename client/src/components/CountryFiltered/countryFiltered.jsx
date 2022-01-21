import React from 'react'
import Card from '../Card/card'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchBar from "../SearchBar/searchbar"




export default function CountryFiltered() {

  const match = useSelector((state) => state.allCountries)

  const copyMatch = useSelector((state) => state.countriesLoaded)






  return (
    <div>
      <SearchBar />
      <div>
        <div>
          <h1> Results:</h1>
        </div>
        {copyMatch.length === match.length ?
          <div>
            <h1> Country Not Found:</h1>
            <Link to="/countries"> Home</Link>
          </div> :
          <div>
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