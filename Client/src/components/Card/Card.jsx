import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import style from "./Card.module.css"

export default function Card(props) {
  //props va a ser igual a un objeto {id, name, status, todos los demas..}
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(!isFav);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(!isFav);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 },[myFavorites]);

  return (
    <div className={style.card}>
      {isFav ? (
        <button className={style.favoriteButton} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={style.favoriteButton} onClick={handleFavorite}>🤍</button>
      )}
      <button className={style.closeButton} onClick={() => props.onClose(props.id)}>X</button>
      <Link to={`/detail/${props.id}`}>
        <h2 className={style.name}>{props.name}</h2>
      </Link>
      <h2 className={style.status}>{props.status}</h2>
      <h2 className={style.species}>{props.species}</h2>
      <h2 className={style.gender}>{props.gender}</h2>
      <h2 className={style.origin}>{props.origin}</h2>
      <img className={style.image} src={props.image} alt={props.name} />
    </div>
  );
}
