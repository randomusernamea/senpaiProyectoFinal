import Pokedex from "../Pokedex/pokedex";
import "./card.css";
import { Link } from "react";
import { tipoAcolor } from "../../Utilities/utilities";

function Card(props) {
  const divStyle = tipoAcolor(props.tipo);
  return (
    <div style={{ borderColor: divStyle }} className="bottomCompDiv">
      <p style={{ color: divStyle }} className="bottomCompP">
        #{props.pokeid}
      </p>
      <img className="bottomCompImg" src={props.pokeimg} alt={props.nombre} />
      <h5 style={{ backgroundColor: divStyle }} className="bottomCompNombres">
        {props.nombre}
      </h5>
    </div>
  );
}

export default Card;
