import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let user = "";

  const login = async () => {
    await fetch("http://localhost:3000/users/" + usuario, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        user = data;
      })
      .catch((error) => {
        alert(error.statusText);
      });
  };

  const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const onChangeValuePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitSesion = async (e) => {
    e.preventDefault();
    await login();
    // Promise.resolve(user);
    let a = autenticacion();
    if (a == undefined) {
      alert("el usuario o la contraseña son incorrectos");
      return false;
    }
    navigate(`pokedex`);
  };

  const autenticacion = () => {
    if (user == undefined) return undefined;

    if (password === user.password) {
      return {
        username: user.id,
        password: user.password,
      };
    }
    return undefined;
  };

  /*function consultarId(email) {
    fetch("http://localhost:3000/users/" + usuario, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {

      })
      .catch((error) => {
        alert(error.statusText);
      });
  }*/

  return (
    <>
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
              value={password}
              onChange={onChangeValuePassword}
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
    </>
  );
}

export default Home;
