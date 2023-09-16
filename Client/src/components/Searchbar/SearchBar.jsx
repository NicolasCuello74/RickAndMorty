import { useState } from "react";


export default function SearchBar(props) {
  // props = { onSearch }
  const [id, setId] = useState("");
  const { onSearch } = props;

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}
