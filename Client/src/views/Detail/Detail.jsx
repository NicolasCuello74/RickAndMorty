import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  // /detail/:id/
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          setLoading(false);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return loading ? (
    <div className={style.detailContainer}>
      <h1 className={style.loadingText}>Loading...</h1>
    </div>
  ) : (
    <div className={style.detailContainer}>
      <h2 className={style.h2}>{character.name}</h2>
      <div className={style.StatusSpeciesContainer}>
        <p className={style.statusSpecies}>{character.status}</p>
        <p className={style.statusSpecies}>{character.species}</p>
      </div>
      <h2 className={style.h2}>{character.gender}</h2>
      {character.origin.name && character.origin.name !== "unknown" && (
        <p className={style.origin}>{character.origin.name}</p>
      )}
      <img className={style.img} src={character.image} alt={character.name} />
    </div>
  );
};

export default Detail;
