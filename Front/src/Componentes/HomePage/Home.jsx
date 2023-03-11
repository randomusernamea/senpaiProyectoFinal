import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Register/Register";
import "./Home.css";

function Home() {
  /* const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let user = ""; */

  /* useEffect(() => {
    loguearUsuario().then((data) => {
      user = data;
    });
  }, []); */

  // const login = async () => {
  //   await fetch("http://localhost:3000/users/" + usuario, {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       return Promise.reject(response);
  //     })
  //     .then((data) => {
  //       user = data;
  //     })
  //     .catch((error) => {
  //       alert(error.statusText);
  //     });
  // };

  /* const onChangeValueUsuario = (e) => {
    setUsuario(e.target.value);
  }; */

  /* const onChangeValuePassword = (e) => {
    setPassword(e.target.value);
  }; */

  /* const onSubmitSesion = async (e) => {
    e.preventDefault();
    //await login();
    // Promise.resolve(user);
    let a = autenticacion();
    if (a == undefined) {
      alert("el usuario o la contraseña son incorrectos");
      return false;
    }
    navigate(`pokedex`);
  }; */

  /* const autenticacion = () => {
    if (user == undefined) return undefined;

    if (password === user.password) {
      return {
        username: user.id,
        password: user.password,
      };
    }
    return undefined;
  }; */

  return (
    <>
      <div class="section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      {/*  <div class="center-wrap"> */}
                      <Login />
                      {/* </div> */}
                    </div>
                    <div class="card-back">
                      {/*<div class="center-wrap"> */}
                      <Signup />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
