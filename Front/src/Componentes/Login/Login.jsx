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
        const user = {correo: usuario, clave: clave}
        loguearUsuario(user).then((response) => {
            localStorage.setItem("JSONToken", response.token)
            navigate("/")
        })
    }
    return (
      <div className="HomePageBackground">
        <div className="HomeLogin">
          <form className="HomePageForm" onSubmit={onSubmitSesion}>
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="text"
              onChange={onChangeValueUsuario}
              value={usuario}
              required
              placeholder="e-mail"
            />
            <br />
            <label htmlFor="password" required>
              Password
            </label>
            <br />
            <input
              type="password"
              value={clave}
              onChange={onChangeValueClave}
              placeholder="password"
            />
            <br />
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