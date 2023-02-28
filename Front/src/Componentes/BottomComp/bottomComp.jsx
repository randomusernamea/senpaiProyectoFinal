import "./bottomComp.css";
import Card from "../Card/card";
import { logout } from "../../API/rule_Login";
import { Link, useNavigate } from "react-router-dom";

function BottomComp(props) {

  let navigate = useNavigate();

  const onSubmitLogout = async (e) => {
    e.preventDefault()
    try {
      logout(user).then(() => {
        localStorage.setHeader('Authorization', `Bearer ${JSON.parse(localStorage.getItem("currentUser")).token}`);
        localStorage.clear();
        context.commit("setUser", {
          token: null,
          userId: null,
        });
        localStorage.setHeader('Authorization', null);
        navigate("/")
      })
    } catch (e) {
      const error = new Error("Something went wrong");
      throw error;
    }
  }

  return (
    <div className="bodyBottomComp">
      <div className="cards">
        {props.pokemones?.map((poke) => {
          return (
            <Link to={`/pokemons/${poke.id}`}>
              <Card
                tipo={poke.tipo1}
                nombre={poke.nombre}
                pokeid={poke.id}
                pokeimg={poke.img}
              ></Card>
            </Link>
          );
        })}
        <Link to={`/Agregar`}>
          <Card
            tipo={"Normal"}
            nombre={"Agregar"}
            pokeid={"0"}
            pokeimg={"/images/add.png"}
          ></Card>
        </Link>
      </div>
      <div className="btnCointainerBottomComp">
        <button onClick={onSubmitLogout} className="btnBottomComp">Cerrar sesión</button>
      </div>
    </div>
  );
}

export default BottomComp;
