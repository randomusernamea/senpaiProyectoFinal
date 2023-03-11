import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../../API/rule_Registrar";
import "../Register/registrar.css";

function Registrar() {
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");
  const [mensajeError, setMensajeError] = useState("");
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
    const user = { nombre: nombre, correo: usuario, clave: clave, permisos: 1 }
    //Mando un request de registrar al back
    registrarUsuario(user).then((response) => {
      console.log(response instanceof Error)
      if (!(response instanceof Error)){
        //Si no falla mando el usuario a loguearse
        navigate("/Login")
      }
      else {
        //Si falla setel el mensaje de porque falla
        setMensajeError(response.message)
      } 
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
          <div className="group">
            <input
              className="input"
              type="text"
              onChange={onChangeValueNombre}
              value={nombre}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="Nombre">Nombre</label>
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
export default Registrar;