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


  return <Grid.Container gap={2} justify="center" align="center">
<Pagination rounded  shadow color="secondary" total={numberOfButtons} initialPage={1} onChange= { (e) => handleChange(e)} controls="true" />    
</Grid.Container>;
}
