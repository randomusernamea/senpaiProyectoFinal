import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loguearUsuario } from "../../API/rule_Login";
import "./login.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  let navigate = useNavigate();
  const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const onChangeValueClave = (e) => {
    setClave(e.target.value);
  };

  const onSubmitSesion = async (e) => {
    e.preventDefault()
    const user = { correo: usuario, clave: clave }
    loguearUsuario(user).then((response) => {
      //Guardo el token en localstorage
      localStorage.setItem("JSONToken", response.token)
      navigate("/")
    })
  }
  return (
    <div className="page-register">
      <div className="">
        <form className="form-register" onSubmit={onSubmitSesion}>
          <div className="group">
            <input
              className="input"
              type="text"
              onChange={onChangeValueUsuario}
              value={usuario}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="group">
            <input
              className="input"
              type="password"
              value={clave}
              onChange={onChangeValueClave}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="password" required>Password</label>
          </div>
          {/* <Link to={`pokedex`}> */}
          <button id="btn-neon" type="submit">
            Iniciar
          </button>
          {/* </Link> */}
        </form>
      </div>
      <div className="HomeImg"></div>
    </div>
  )


}
export default Login;