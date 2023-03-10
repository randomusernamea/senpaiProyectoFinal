import "./bottomComp.css";
import Card from "../Card/card";
import { logout } from "../../API/rule_Login";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function BottomComp(props) {
  let navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(true);

  const onSubmitLogout = async (e) => {
    e.preventDefault();
    try {
      //logout().then((response) => {
      //localStorage.setHeader('JSONToken', `Bearer ${JSON.parse(localStorage.getItem("currentUser")).token}`);
      //localStorage.clear();
      /* context.commit("setUser", {
      token: null,
      userId: null, */
      localStorage.removeItem("JSONToken");
      //});
      setIsLogged(false);
      navigate("/login");
      /* }) */
    } catch (e) {
      const error = new Error("Error logging out");
      throw error;
    }
  };

  return (
    <div className="bodyBottomComp">
      <div className="cards">
        {props.pokemones?.map((poke) => {
          return (
            <Link to={`/pokemons/${poke.id}`}>
              <Card tipo={poke.tipo1} nombre={poke.nombre} pokeid={poke.id} pokeimg={"http://" + poke.foto}></Card>
            </Link>
          );
        })}
        <Link to={`/Agregar`}>
          <Card tipo={"Normal"} nombre={"Agregar"} pokeid={"0"} pokeimg={"/images/add.png"}></Card>
        </Link>
      </div>
      <div className="btnCointainerBottomComp">
        {isLogged ? (
          <button onClick={onSubmitLogout} className="btnBottomComp">
            Cerrar sesión
          </button>
        ) : (
          <label>Inicia Sesion</label>
        )}
      </div>
    </div>
  );
}

export default BottomComp;
