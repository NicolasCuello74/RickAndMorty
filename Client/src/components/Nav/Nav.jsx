import React from "react";
import SearchBar from "../Searchbar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({ onSearch, logout }) => (
  <>
    <div className={style.navBar}>
      <Link to="/home">
        <button className={style.button}>Home</button>
      </Link>

      <Link to="/about">
        <button className={style.button}>About</button>
      </Link>
      <Link to="/favorites">
        <button className={style.button}>Favorites</button>
      </Link>
      <button onClick={logout} className={style.button}>Logout</button>
      <SearchBar onSearch={onSearch} />
    </div>
  </>
);

export default Nav;
