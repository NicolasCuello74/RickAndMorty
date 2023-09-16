import Form from "../../components/Form/Form";
import style from "./Login.module.css";

const Login = ({ login }) => (
  <>
  <div className={style.loginContainer}>
      <Form login={login} />
  </div>
    
  </>
);

export default Login;
