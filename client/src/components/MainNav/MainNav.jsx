import React from 'react'
import SearchBar from '../SearchBar/searchbar'
import s from './MainNav.module.css'
import { Link } from 'react-router-dom'
import { Box , AppBar, Toolbar, Typography  } from '@mui/material';


export default function MainNav() {
    return (
        
        
        <Box sx={{ flexGrow: 1 }}>
             <AppBar position="static">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> \
                    <Link to="/" className={s.link} >
                        WELCOME LOGO
                    </Link>
                </Typography>
                <Toolbar>
                    <div className={s.searchbar}>
                        <SearchBar/>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
