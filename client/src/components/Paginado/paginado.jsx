import React from 'react';
import { Grid } from '@nextui-org/react';
import { Pagination } from '@nextui-org/react';
import { useDispatch,  } from 'react-redux'
import { page } from '../../actions/actions'



export default function Paginado({numberOfButtons}) {

    const dispatch = useDispatch();


    const handleChange = (e) => {    
        dispatch(page(e));
    }


  return <div>
{
  numberOfButtons && numberOfButtons.map((e) =>{
    return (
      <button onClick={handleChange}></button>
    )
  })
} 
</div>;
}
