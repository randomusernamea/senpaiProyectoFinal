import "./PokemonFormComp.css";

import { useState } from "react";


function PokemonFormComp(params) {
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [img, setImg] = useState("")
    const [tipo1, setTipo1] = useState("")
    const [tipo2, setTipo2] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [abilities, setAbilities] = useState("")
    const [hp, setHp] = useState("")
    const [atk, setAtk] = useState("")
    const [def, setDef] = useState("")
    const [satk, setSatk] = useState("")
    const [sdef, setSdef] = useState("")
    const [spd, setSpd] = useState("")
    const [texto, setTexto] = useState("")
    
    const onChangeValueId = (e) => {
        setId(e.target.value);
      };
      const onChangeValueNombre = (e) => {
        setNombre(e.target.value);
      };
      const onChangeValueImg = (e) => {
        setImg(e.target.value);
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
      const onSubmitPkmn = (e) => {
        e.preventDefault()
        const Pokemon = {
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
            }
        }
        if (params.tarea === "agregar"){
            setTexto("Creando Pokemon...") //todo
            // registrarPokemon(Pokemon).then((response) => {

        //})
        }
        else {
            setTexto("Editando Pokemon...") //todo
            // editarPokemon(Pokemon).then((response) => {

        //})
        }
        
    }

    return (
        <form onSubmit={onSubmitPkmn}>
            <label for="id">id:</label>
            <input type="text" id="id" name="id" onChange = {onChangeValueId} value = {id}/><br/>
            <label for="Nombre">Nombre:</label>
            <input type="text" id="Nombre" name="Nombre" onChange = {onChangeValueNombre} value = {nombre}/><br/>
            <label for="Imagen">Imagen:</label>
            <input type="text" id="Imagen" name="Imagen" onChange = {onChangeValueImg} value = {img}/><br/>
            <label for="Tipo 1">Tipo 1:</label>
            <input type="text" id="Tipo 1" name="Tipo 1" onChange = {onChangeValueTipo1} value = {tipo1}/><br/>
            <label for="Tipo 2">Tipo 2:</label>
            <input type="text" id="Tipo 2" name="Tipo 2" onChange = {onChangeValueTipo2} value = {tipo2}/><br/>
            <label for="Weight">Weight:</label>
            <input type="text" id="Weight" name="Weight" onChange = {onChangeValueWeight} value = {weight}/><br/>
            <label for="Height">Height:</label>
            <input type="text" id="Height" name="Height" onChange = {onChangeValueHeight} value = {height}/><br/>
            <label for="Abilities">Abilities:</label>
            <input type="text" id="Abilities" name="Abilities" onChange = {onChangeValueAbilities} value = {abilities}/><br/>
            <label for="HP">HP:</label>
            <input type="text" id="HP" name="HP" onChange = {onChangeValueHp} value = {hp}/><br/>
            <label for="atk">atk:</label>
            <input type="text" id="atk" name="atk" onChange = {onChangeValueAtk} value = {atk}/><br/>
            <label for="def">def:</label>
            <input type="text" id="def" name="def" onChange = {onChangeValueDef} value = {def}/><br/>
            <label for="satk">satk:</label>
            <input type="text" id="satk" name="satk" onChange = {onChangeValueSatk} value = {satk}/><br/>
            <label for="sdef">setDef:</label>
            <input type="text" id="sdef" name="sdef" onChange = {onChangeValueSdef} value = {sdef}/><br/>
            <label for="spd">spd:</label>
            <input type="text" id="spd" name="spd" onChange = {onChangeValueSpd} value = {spd}/><br/>
            <button id="crearBtn" type="submit">
                    Enviar datos
                </button>
                <p>{texto}</p>
        </form>
    )
}

export default PokemonFormComp;
