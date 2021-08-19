import React from 'react'
import Card from '../Card/card'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function CountryFiltered() {

  const match = useSelector((state) => state.allCountries)



  return (
    <div>
      <Link to="/countries">Home</Link>
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
    </div>
  );
}