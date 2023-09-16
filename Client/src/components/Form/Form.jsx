import { useState } from "react";
import validate from "./validation.js";
import style from "./Form.module.css";

function Form({ login }) {
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const nameInput = event.target.name;
    setDataUser({
      ...dataUser,
      [nameInput]: event.target.value,
    });
    setErrors(
      validate({
        ...dataUser,
        [nameInput]: event.target.value,
      })
    );
  };

  const hanldeSubmit = (event) => {
    event.preventDefault();
    login(dataUser);
  };

  return (
    <>
      <form className={style.form} onSubmit={hanldeSubmit}>
        <img
          className={style.img}
          src={
            "https://www.wescreenplay.com/wp-content/uploads/2017/11/rick-and-morty-portal.jpg"
          }
          alt="login"
        />
        <div className={style.caja}>
          <label className={style.label}>Email</label>
          <input
            className={style.input}
            type="text"
            value={dataUser.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email && <p className={style.errorMessage}>{errors.email}</p>}
        </div>
        <div className={style.caja}>
          <label className={style.label}>Password</label>
          <input
            className={style.input}
            type="password"
            value={dataUser.password}
            name="password"
            onChange={handleChange}
          />
          {errors.password && <p className={style.errorMessage}>{errors.password}</p>}
        </div>
        <button className={style.button}>Submit</button>
      </form>
    </>
  );
}

export default Form;
