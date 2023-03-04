import "../PokemonFormComp/PokemonFormComp.css";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { crearPokemon } from "../../API/rule_crear"
import { editarPokemon } from "../../API/rule_editar"
import { useNavigate } from "react-router-dom";

function PokemonFormComp(params) {
  let navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search)
  const [id, setId] = useState(queryParams.get("id") || "")
  const [nombre, setNombre] = useState(queryParams.get("nombre") || "")
  const [img, setImg] = useState(queryParams.get("img") || "")
  const [tipo1, setTipo1] = useState(queryParams.get("tipo1") || "")
  const [tipo2, setTipo2] = useState(queryParams.get("tipo2") || "")
  const [weight, setWeight] = useState(queryParams.get("weight") || "")
  const [height, setHeight] = useState(queryParams.get("height") || "")
  const [abilities, setAbilities] = useState(queryParams.get("abilities") || "")
  const [hp, setHp] = useState(queryParams.get("hp") || "")
  const [atk, setAtk] = useState(queryParams.get("atk") || "")
  const [def, setDef] = useState(queryParams.get("def") || "")
  const [satk, setSatk] = useState(queryParams.get("satk") || "")
  const [sdef, setSdef] = useState(queryParams.get("sdef") || "")
  const [spd, setSpd] = useState(queryParams.get("spd") || "")
  const [descripcion, setDescripcion] = useState(queryParams.get("descripcion") || "")
  const [texto, setTexto] = useState("")

  const onChangeValueId = (e) => {
    setId(e.target.value);
  };
  const onChangeValueNombre = (e) => {
    setNombre(e.target.value);
  };
  const onChangeValueTipo1 = (e) => {
    setTipo1(e.target.value);
  };
  const onChangeValueTipo2 = (e) => {
    setTipo2(e.target.value);
  };
  const onChangeValueWeight = (e) => {
    setWeight(e.target.value);
  };
  const onChangeValueHeight = (e) => {
    setHeight(e.target.value);
  };
  const onChangeValueAbilities = (e) => {
    setAbilities(e.target.value);
  };
  const onChangeValueHp = (e) => {
    setHp(e.target.value);
  };
  const onChangeValueAtk = (e) => {
    setAtk(e.target.value);
  };
  const onChangeValueDef = (e) => {
    setDef(e.target.value);
  };
  const onChangeValueSatk = (e) => {
    setSatk(e.target.value);
  };
  const onChangeValueSdef = (e) => {
    setSdef(e.target.value);
  };
  const onChangeValueSpd = (e) => {
    setSpd(e.target.value);
  };
  const onChangeValueDescripcion = (e) => {
    setDescripcion(e.target.value);
  }
  const onChangeValueImg = (e) => {
    const image = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImg(image)
  };
  const onSubmitPkmn = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('Imagen', img.data)
    const Pokemon = {
      idViejo: queryParams.get("id"),
      id: id,
      nombre: nombre,
      img: img,
      tipo1: tipo1,
      tipo2: tipo2,
      weight: weight,
      height: height,
      abilities: abilities,
      stats: {
        hp: hp,
        atk: atk,
        def: def,
        satk: satk,
        sdef: sdef,
        spd: spd,
      },
      descripcion: descripcion
    }
    formData.append("Pokemon", JSON.stringify(Pokemon))
    if (params.tarea === "agregar") {
      setTexto("Creando Pokemon...")
      crearPokemon(formData).then((response) => {
        //todo Manejar la respuesta
        setTexto("Pokemon creado exitosamente")
      })
    }
    else {
      setTexto("Editando Pokemon...")
      editarPokemon(formData).then((response) => {
        //todo Manejar la respuesta
        setTexto("Pokemon editado exitosamente")
        navigate("/Pokemons/" + id)
      })
    }
  }

  return (
    <div className="register-page">
      <div className="form">
        <form onSubmit={onSubmitPkmn} className="register-form">
          <label for="id">id:</label>
          <input type="text" id="id" name="id" onChange={onChangeValueId} value={id} />
          <label for="Nombre">Nombre:</label>
          <input type="text" id="Nombre" name="Nombre" onChange={onChangeValueNombre} value={nombre} />
          <label for="Imagen">Imagen:</label>
          <input type="file" id="Imagen" name="Imagen" onChange={onChangeValueImg} />
          <label for="Imagen">Imagen subida:</label>
          {img.preview ? (
            <img src={img.preview} width="100" height="100" alt="Imagen subida" />
          ) : <label>?</label>}
          <label for="Tipo 1">Tipo 1:</label>
          <input type="text" id="Tipo 1" name="Tipo 1" onChange={onChangeValueTipo1} value={tipo1} />
          <label for="Tipo 2">Tipo 2:</label>
          <input type="text" id="Tipo 2" name="Tipo 2" onChange={onChangeValueTipo2} value={tipo2} />
          <label for="Weight">Weight:</label>
          <input type="text" id="Weight" name="Weight" onChange={onChangeValueWeight} value={weight} />
          <label for="Height">Height:</label>
          <input type="text" id="Height" name="Height" onChange={onChangeValueHeight} value={height} /><br />
          <label for="Abilities">Abilities:</label>
          <input type="text" id="Abilities" name="Abilities" onChange={onChangeValueAbilities} value={abilities} /><br />
          <label for="HP">HP:</label>
          <input type="text" id="HP" name="HP" onChange={onChangeValueHp} value={hp} />
          <label for="atk">atk:</label>
          <input type="text" id="atk" name="atk" onChange={onChangeValueAtk} value={atk} />
          <label for="def">def:</label>
          <input type="text" id="def" name="def" onChange={onChangeValueDef} value={def} />
          <label for="satk">satk:</label>
          <input type="text" id="satk" name="satk" onChange={onChangeValueSatk} value={satk} />
          <label for="sdef">setDef:</label>
          <input type="text" id="sdef" name="sdef" onChange={onChangeValueSdef} value={sdef} />
          <label for="spd">spd:</label>
          <input type="text" id="spd" name="spd" onChange={onChangeValueSpd} value={spd} />
          <label for="Descripcion">Descripcion:</label>
          <input type="text" id="Descripcion" name="Descripcion" onChange={onChangeValueDescripcion} value={descripcion} /><br />
          <button id="crearBtn" type="submit">
            Enviar datos
          </button>
          <p>{texto}</p>
        </form>
      </div>
    </div>
  )
}

export default PokemonFormComp;
