import "./bigCard.css";
import { tipoAcolor, getPrevious, getNext } from "../../Utilities/utilities";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { eliminarPokemon } from "../../API/rule_eliminar";
import { getPokemones, getPokemonById } from "../../API/rule_info";
import { numeroATipo } from "../../Utilities/utilities";

function BigCard() {
  const { idPokemons } = useParams();
  const [pokemones, setPokemones] = useState([{ id: "0" }, { id: "1" }, { id: "2" }]);
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

  const [indice, setIndice] = useState(1);

  // useEffect(() => {
  //   getPokemones().then((data) => {
  //     setPokemones(data);
  //     indiceActual();
  //   });
  // }, []);

  useEffect(() => {
    getPokemonById(idPokemons).then((data) => {
      if (data[0]){
        //Convierte los stats a string porque despues se les hace concat que es una funcion de String
        //Pone ciertos datos en un JSON interno llamado stats
        data[0].stats = { hp: String(data[0].hp), atk: String(data[0].atk), def: String(data[0].def), satk: String(data[0].satk), sdef: String(data[0].sdef), spd: String(data[0].spd) };
        //Los tipos vienen como un numero del backend, los convierte a un string usable
        data[0].tipo1 = numeroATipo(data[0].tipo_id[0]);
        data[0].tipo2 = numeroATipo(data[0].tipo_id[1]);
        //Convierte los numeros que vienen a el formato usado en el front, les agrega la unidad
        data[0].height = String(data[0].altura).replace(".", ",") + "m";
        data[0].weight = String(data[0].peso).replace(".", ",") + "kg";
        //Borro los datos no usados
        delete data[0]["altura"];
        delete data[0]["peso"];
        delete data[0]["hp"];
        delete data[0]["atk"];
        delete data[0]["def"];
        delete data[0]["sdef"];
        delete data[0]["satk"];
        delete data[0]["spd"];
        //Pongo las habilidades que vienen en un array en donde usa el front
        data[0].ability1 = data[0].habilidad[0];
        if (data[0].habilidad[1]) {
          data[0].ability2 = data[0].habilidad[1];
        }
        delete data[0]["habilidad"];
        //Guardo el pokemon
        setPoke(data[0]);
        getPokemones().then((dato) => {
          //Traigo la lista de pokemones para las flechas de anterior y siguiente
          setPokemones(dato);
          //Asigno a indice actual en donde esta el pokemon actual en la lista de pokemones
          indiceActual(data[0], dato);
        });
      }
      else {
        // Navigate("/Error")
        //No hace falta el navigate ya que la pagina le indica al usuario si el pokemon no se encuentra
      }
    });
  }, []);

  const indiceActual = (pokemon, listaPokemones) => {
    //Busca el pokemon en la lista de pokemones por id
    setIndice(listaPokemones.findIndex((po) => po.id === pokemon.id));
  };

  function deletePokemon() {
    //Manda un request a la base de datos para borrar el pokemon
    eliminarPokemon(poke.id).then(function (response) {
      //Asigno MissingNo al borrar el pokemon, indicando que se borro
      setPoke({
        id: "003",
        nombre: "MissingNo",
        img: "/images/000.svg",
        tipo1: "Normal",
        tipo2: "",
        weight: "10,0kg",
        height: "1,0m",
        ability1: "Error",
        ability2: "",
        stats: {
          hp: "036",
          atk: "136",
          def: "000",
          satk: "006",
          sdef: "006",
          spd: "029",
        },

        descripcion: ".....",
      });
    });
  }

  return (
    <div id="bigCardDiv" style={{ backgroundColor: tipoAcolor(poke.tipo1) }}>
      <div id="bigCardTopDiv">
        <Link to={"/"}>
          <div id="bigCardArrow"> </div>
        </Link>
        <p id="bigCardName">{poke.nombre}</p>
        <p id="bigCardId">#{poke.id}</p>

        {/* {getPrevious(poke.id) !== "000" && (
          <Link
            id="bigCardArrowLeft"
            //onClick={() => consultarId(getPrevious(poke.id))}
            to={`/pokemons/${getPrevious(poke.id)}`}
          ></Link>
        )}
        <img src={"http://" + poke.foto} id="bigCardPokeImg" alt={poke.nombre} />
        {getNext(poke.id) !== "000" && (
          <Link
            id="bigCardArrowRight"
            //onClick={() => consultarId(getNext(poke.id))}
            to={`/pokemons/${getNext(poke.id)}`}
          ></Link>
        )} */}
        <Link id="bigCardArrowLeft" to={`/pokemons/${pokemones[indice == 0 ? pokemones.length - 1 : indice - 1].id}`} onClick={getPokemonById(pokemones[indice == 0 ? pokemones.length - 1 : indice - 1].id)}>
          <img src="/images/arrowLeft.svg" alt="arrowLeft" />
        </Link>
        {/* Si esta en el primer elemento, llevar a ultimo elemento, sino, restar uno al indice (moverse a la izq) */}

        <img src={"http://" + poke.foto} id="bigCardPokeImg" alt={poke.nombre} />

        <Link id="bigCardArrowRight" to={`/pokemons/${pokemones[pokemones.length - 1 == indice ? 0 : indice + 1].id}`} onClick={getPokemonById(pokemones[pokemones.length - 1 == indice ? 0 : indice + 1].id)}>
          <img src="/images/Frame.svg" alt="arrowRight" />
        </Link>
        {/* Si esta antes de ultima posicion, entonces sumar uno al indice (moverse a la der). Si no (ultima posicion), llevar al primer elemento */}
      </div>

      <div id="bigCardBottomDiv">
        {/*<div id="bigCardEvosDiv">
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
        </div>*/}
        <div id="bigCardTipos">
          <p className="tipo" style={{ backgroundColor: tipoAcolor(poke.tipo1) }} id="tipo1">
            {poke.tipo1}
          </p>
          {poke.tipo2 !== "" && (
            <p className="tipo" style={{ backgroundColor: tipoAcolor(poke.tipo2) }} id="tipo2">
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
              {poke.ability2 !== "" && <p className="bigCardPokeParamsP">{poke.ability2}</p>}
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
                  width: (255 - parseInt(poke.stats.hp)).toString().concat("px"),
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
                  width: (255 - parseInt(poke.stats.atk)).toString().concat("px"),
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
                  width: (255 - parseInt(poke.stats.def)).toString().concat("px"),
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
                  width: (255 - parseInt(poke.stats.satk)).toString().concat("px"),
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
                  width: (255 - parseInt(poke.stats.sdef)).toString().concat("px"),
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
                  width: (255 - parseInt(poke.stats.spd)).toString().concat("px"),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div id="bigCardPokeBallImage"></div>
      <div className="group-buttons">
        <button onClick={deletePokemon} class="glowing-btn" id="eliminar">
          <span class="glowing-txt">
            EL<span class="faulty-letter">I</span>MINAR
          </span>
        </button>
        <Link id="editar" to={`/editar?id=${poke.id}&nombre=${poke.nombre}&imagen=${poke.foto}&tipo1=${poke.tipo1}&tipo2=${poke.tipo2}&weight=${poke.weight}&height=${poke.height}&abilities=${poke.ability1}/${poke.ability2}&hp=${poke.stats.hp}&atk=${poke.stats.hp}&def=${poke.stats.def}&satk=${poke.stats.satk}&sdef=${poke.stats.sdef}&spd=${poke.stats.spd}`}>
          <button class="glowing-btn-2">
            <span class="glowing-txt-2">
              ED<span class="faulty-letter">I</span>TAR
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BigCard;
