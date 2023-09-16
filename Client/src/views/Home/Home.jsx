import React from "react";
import Cards from "../../components/Cards/Cards"
import "./Home.css";

const Home = ({characters, onClose}) => (
    /* le pasamos por props la función onClose a Cards */
    <Cards characters={characters} onClose={onClose} />
  );

export default Home