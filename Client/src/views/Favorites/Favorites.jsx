import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCard, orderCard } from "../../redux/actions";
import "./Favorites.css";

const Favorites = ({ onClose }) => {
  const myfavorites = useSelector((state) => state.myFavorites);
  // props se comporta como un objeto prop = {characters}
  //const { characters } = props;
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCard(order)); //A o B..
  };
  const handlerFilter = (event) => {
    const filter = event.target.value;
    dispatch(filterCard(filter)); //male o female o..
  };

  return (
    <>
      <div className="favorites__ordered">
        <select name="" onChange={handlerOrder}>
          <option value="A">Ascendente</option>
          <option value="B">Descendente</option>
        </select>
      </div>
      <div className="favorites__filter">
        <select name="" onChange={handlerFilter}>
          <option value="Todos">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        {myfavorites.map((char) => {
          // char {id, name,  status, gender, origin, etc}
          return (
            <Card
              key={char.id}
              id={char.id} // le pasamos el id del char para luego ejecutar el onClose
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
              origin={char.origin.name}
              image={char.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
