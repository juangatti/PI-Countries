import React from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/searchbar"
import   "./nav.module.css"
import { Box , AppBar, Toolbar, Typography  } from '@mui/material';


export default function Nav() {


    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink  exact to="/">
                            <img src="https://i.pinimg.com/originals/b9/93/02/b99302e5e4d36d7a4af5bf6f17583008.png" alt="mundo" height="60" width="60"/>
                        </NavLink>
                    </Typography>
                    
                    <NavLink exact to="/activities" sx={{ flexGrow: 6 }}>
                            <Typography variant="h6" component="div" color={'white'}>
                                Create Your Own Tour!
                            </Typography>
                        </NavLink>
                    <Box sx={{ flexGrow: 2 }}>

                        <SearchBar />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}