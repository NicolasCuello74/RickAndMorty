import "./App.css";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";
import axios from "axios";
import About from "./views/About/About";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Login from "./views/Login/Login";
import Favorites from "./views/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  //   const onSearch = (newCharacter) => {
  //    console.log()
  //    setCharacters([...characters, newCharacter])
  //   }
  const { pathname } = useLocation(); //enpoint
  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "unaPassword";

  const dispatch = useDispatch();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      window.alert(error.response.data);
    }
    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //    const { access } = data;
    //    setAccess(data);
    //    access && navigate('/home');
    // });
  }

  const logout = () => {
    navigate("/");
    setAccess(false);
    setCharacters([]);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      // Verificar si el personaje ya está en la lista
      const isCharacterInList = characters.some(
        (character) => character.id === data.id
      );

      if (!isCharacterInList) {
        // Solo agrega el personaje si no está en la lista
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        // Si el personaje ya está en la lista, muestra un mensaje de alerta o toma alguna otra acción.
        window.alert("El personaje ya está en la lista.");
      }
    } catch (error) {
      window.alert(error.response.data.message);
    }
    // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
    //   ({ data }) => {
    //     if (data.name) {
    //       setCharacters((oldChars) => [...oldChars, data]);
    //     } else {
    //       window.alert("¡No hay personajes con este ID!");
    //     }
    //   }
    // );
  }

  function onClose(id) {
    const fiterCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(fiterCharacters);
    dispatch(removeFav(id));
  }

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/Home"
          element={<Home characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/About" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} onClose={onClose} />
      </Routes>
    </div>
  );
}

export default App;
