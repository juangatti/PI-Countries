import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchbar";
import s from './nav.module.css'

export default function Nav() {
  return (  
      <div className={s.NavContainer} > 
        <div>
          <Link to="/countries">
            <img
              src="https://i.pinimg.com/originals/b9/93/02/b99302e5e4d36d7a4af5bf6f17583008.png"
              alt="mundo"
              height="60"
              width="60"
            />
          </Link>
        </div>
        <div className={s.SpanContainer}>
          <Link to="/activities" className={s.SpanLink}>
            <p>Create Your Own Tour!</p>
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
  );
}
