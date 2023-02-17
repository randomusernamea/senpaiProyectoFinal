import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../../API/rule_Registrar";
import "./registrar.css";

function Registrar() {
    const [usuario, setUsuario] = useState("");
    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    let navigate = useNavigate();
    const onChangeValueUsuario = (e) => {
        setUsuario(e.target.value);
      };
    
      const onChangeValueClave = (e) => {
        setClave(e.target.value);
      };
      const onChangeValueNombre = (e) => {
        setNombre(e.target.value);
      };


      const onSubmitSesion = async (e) => {
        e.preventDefault()
        const user = {nombre: nombre, correo: usuario, clave: clave, permisos: 1}
        registrarUsuario(user).then((response) => {
            navigate("/Login")
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
            <label htmlFor="Nombre">Nombre</label>
            <br />
            <input
              type="text"
              onChange={onChangeValueNombre}
              value={nombre}
              required
              placeholder="Nombre"
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
export default Registrar;