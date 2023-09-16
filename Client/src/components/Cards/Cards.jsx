import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards({ characters, onClose}) {
  // props se comporta como un objeto prop = {characters}
  // const { characters } = props;
  return (
    <div>
      {characters.map((person) => {
        // person {id, name,  status, gender, origin, etc}
        return (
          <Card
            key={person.id}
            id={person.id}// le pasamos el id del personaje para luego ejecutar el onClose
            name={person.name}
            status={person.status}
            species={person.species}
            gender={person.gender}
            origin={person.origin.name}
            image={person.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
