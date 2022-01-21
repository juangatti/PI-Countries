import React from "react"
import { useDispatch } from "react-redux"
import { getAllNames } from "../../actions/actions"
import { useState } from "react"
import { Link } from "react-router-dom"
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


export default function SearchBar() {

    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    

    const handleSubmit = () => {
        if(input === "") return alert("Fill the field before search")
        dispatch(getAllNames(input));
    };



    return (
        <div className="SearchBar">
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handleInputChange(e)}
            />
          </Search>
            {
                <Link to="/countries/search">
                    <button type="submit" onClick={() => handleSubmit()}>Search</button>
                   
                </Link>
             }
        </div>

    )
}