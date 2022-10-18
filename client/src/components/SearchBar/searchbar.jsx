import React from "react";
import { useDispatch } from "react-redux";
import { getAllNames } from "../../actions/actions";
import { useState } from "react";
import { Link } from "react-router-dom";
import s from './searchbar.module.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input === "") return alert("Fill the field before search");
    dispatch(getAllNames(input));
  };

  return (
    <div className="SearchBar">
      <input placeholder="Search…" onChange={(e) => handleInputChange(e)} className={s.SearchInput} />
      {
        <Link to="/countries/search">
          <button type="submit" onClick={() => handleSubmit()} className={s.SearchButton}>
            Search
          </button>
        </Link>
      }
    </div>
  );
}
