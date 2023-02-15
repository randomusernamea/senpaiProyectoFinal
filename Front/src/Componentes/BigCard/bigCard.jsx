import "./bigCard.css";
import { tipoAcolor, getPrevious, getNext } from "../../Utilities/utilities";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function BigCard() {
  const { idPokemons } = useParams();

  const [poke, setPoke] = useState({
    id: "000",
    nombre: "MissingNo",
    img: "/images/000.svg",
    tipo1: "Normal",
    tipo2: "",
    weight: "10,0kg",
    height: "1,0m",
    ability1: "Error",
    ability2: "",
    stats: {
      hp: "033",
      atk: "136",
      def: "000",
      satk: "006",
      sdef: "006",
      spd: "029",
    },

    descripcion: ".....",
  });

  function consultarId(id) {
    fetch("http://localhost:3000/pokemons/" + id, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setPoke(data);
      })
      .catch((error) => {
        alert(error.statusText);
      });
  }
  useEffect(() => {
    consultarId(idPokemons);
    console.log(toString(255 - parseInt(poke.stats.spd)).concat("px"));
    //   setPoke(
    //     poke.filter((pokes) => {
    //       return pokes.id == idPokemons;
    //     })
    //   );
  }, []);

  return (
    <div id="bigCardDiv" style={{ backgroundColor: tipoAcolor(poke.tipo1) }}>
      <div id="bigCardTopDiv">
        <Link to={"/pokedex"}>
          <div id="bigCardArrow"> </div>
        </Link>
        <p id="bigCardName">{poke.nombre}</p>
        <p id="bigCardId">#{poke.id}</p>
        {getPrevious(poke.id) !== "000" && (
          <Link
            id="bigCardArrowLeft"
            onClick={() => consultarId(getPrevious(poke.id))}
            to={`/pokemons/${getPrevious(poke.id)}`}
          ></Link>
        )}
        <img src={poke.img} id="bigCardPokeImg" alt={poke.nombre} />
        {getNext(poke.id) !== "000" && (
          <Link
            id="bigCardArrowRight"
            onClick={() => consultarId(getNext(poke.id))}
            to={`/pokemons/${getNext(poke.id)}`}
          ></Link>
        )}
      </div>

      <div id="bigCardBottomDiv">
        <div id="bigCardEvosDiv">
          <p
            className="bigCardPAbout"
            style={{ color: tipoAcolor(poke.tipo1) }}
            id="bigCardPAbout"
          >
            Evoluciones
          </p>
          {(poke.stage1 || poke.stage2 || poke.stage3) && (
            <div id="bigCardPEvos">
              {poke.stage1 && (
                <img
                  id="bigCardPokeStageImg1"
                  className="bigCardPokeStageImg"
                  src={poke.stage1pic}
                  alt={poke.stage1}
                />
              )}
              {poke.stage2 && (
                <img
                  id="bigCardPokeStageImg2"
                  className="bigCardPokeStageImg"
                  src={poke.stage2pic}
                  alt={poke.stage2}
                />
              )}
              {poke.stage3 && (
                <img
                  id="bigCardPokeStageImg3"
                  className="bigCardPokeStageImg"
                  src={poke.stage3pic}
                  alt={poke.stage3}
                />
              )}
            </div>
          )}
        </div>
        <div id="bigCardTipos">
          <p
            className="tipo"
            style={{ backgroundColor: tipoAcolor(poke.tipo1) }}
            id="tipo1"
          >
            {poke.tipo1}
          </p>
          {poke.tipo2 !== "" && (
            <p
              className="tipo"
              style={{ backgroundColor: tipoAcolor(poke.tipo2) }}
              id="tipo2"
            >
              {poke.tipo2}
            </p>
          )}
        </div>
        <div id="bigCardPokeParams">
          <div id="bigCardWeight">
            <img id="bigCardWeightImage" src="/images/Weight.svg" />
            <p className="bigCardPokeParamsP">{poke.weight}</p>
            <p id="bigCardParamsWeight" className="bigCardPokeParamsDesc">
              Weight
            </p>
          </div>
          <div id="bigCardHeight">
            <img id="bigCardHeightImage" src="/images/Height.svg" />
            <p className="bigCardPokeParamsP">{poke.height}</p>
            <p id="bigCardParamsHeight" className="bigCardPokeParamsDesc">
              Height
            </p>
          </div>
          <div id="bigCardAbilities">
            <div id="bigCardAbilitiesDiv">
              <p className="bigCardPokeParamsP">{poke.ability1}</p>
              {poke.ability2 !== "" && (
                <p className="bigCardPokeParamsP">{poke.ability2}</p>
              )}
            </div>
            <p id="bigCardParamsAbilities" className="bigCardPokeParamsDesc ">
              Abilities
            </p>
          </div>
        </div>

        <p id="bigCardDesc">{poke.descripcion}</p>

        <div id="bigCardStats">
          <p id="bigCardBaseStats">Base Stats</p>
          <div style={{ color: tipoAcolor(poke.tipo1) }} id="bigCardStatNames">
            <p className="bigCardPStat">HP</p>
            <p className="bigCardPStat">ATK</p>
            <p className="bigCardPStat">DEF</p>
            <p className="bigCardPStat">SPA</p>
            <p className="bigCardPStat">SPD</p>
            <p className="bigCardPStat">SPE</p>
          </div>
          <div id="bigCardStatValues">
            <p>{poke.stats.hp}</p>
            <p>{poke.stats.atk}</p>
            <p>{poke.stats.def}</p>
            <p>{poke.stats.satk}</p>
            <p>{poke.stats.sdef}</p>
            <p>{poke.stats.spd}</p>
          </div>
          <div id="bigCardStatBars">
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.hp.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.hp))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.atk.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.atk))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.def.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.def))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.satk.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.satk))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.sdef.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.sdef))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
            <div className="bigCardContentStats">
              <div
                className="bigCardStatsLengs"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1),
                  width: poke.stats.spd.concat("px"),
                }}
              ></div>
              <div
                className="bigCardStatsRest"
                style={{
                  backgroundColor: tipoAcolor(poke.tipo1).concat("66"),
                  width: (255 - parseInt(poke.stats.spd))
                    .toString()
                    .concat("px"),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div id="bigCardPokeBallImage"></div>
    </div>
  );
}

export default BigCard;
