import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getCountryDetail } from "../../actions/actions"
import Nav from "../Nav/nav"

export default function CountryDetails() {
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.countryDetail)
    

    
    let { id } = useParams();

    useEffect(() => {
        dispatch(getCountryDetail(id))

    }, [dispatch, id])



    return (
        <div>
             <Nav/>
        
        <div>
     <div>
       <div>
         <div>
           <div>
             <div>
               {detail.name}
             </div>
           </div>
         </div>
            <div>
         <img
           src={detail.flag}
           alt="Card"
         />
        <div>
        <h5 color="Black">
            Capital: {detail.capital}
        </h5>
        <h5>
        Continent: {detail.region}
        </h5>
        {detail.subregion !== null ? <h5 color="Black">Subregion: {detail.subregion} </h5> : null}
        </div>
        <div>
        <h5>
            Population: {detail.population}
        </h5>
        <h5>
        Area: {detail.area} Km
        </h5>
        </div>
    </div>
       </div>
     </div>
     <div>
      <div>
        <div>
          <div>
            <h5
            >
              Activities
            </h5>
            
          </div>
        </div>
        <div>
        {detail.activities === null ? <h5>"No hay actividades asociadas "</h5> :<h5>
                    {detail.activities && detail.activities.map(e => {
                        if (e) {
                            return e.name
                        } return <h5>No hay actividades asociadas </h5>
                    })}
                </h5>
                }
        </div>
      </div>
    </div>
 </div>
        </div>
    );
}