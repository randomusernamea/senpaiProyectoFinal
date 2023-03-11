import TopComp from "../TopComp/topComp";
import BottomComp from "../BottomComp/bottomComp";
import "./pokedex.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemones } from "../../API/rule_info";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsOrdered, setPokemonsOrdered] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [search, setSearch] = useState("");
  const { idPokemons } = useParams;

  useEffect(() => {
    getPokemones().then((data) => {
      setPokemons(data);
      setPokemonsOrdered(data);
    });
  }, []);

  function changeSorting(param) {
    setSorting(param);
    let a = sortPokes(pokemonsOrdered, param);
    setPokemonsOrdered(a);
  }

  function sortPokes(a, sortOrder) {
    //Ordena por numero de id o por nombre dependiendo de si sortorder es true o false
    a.sort((a, b) => {
      if (sortOrder === true) {
        //Sort por nombre
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return -1;
      }
      if (sortOrder === false) {
        //Sort por id
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return -1;
      }
      return 0;
    });
    return a;
  }
  function sortAndFilterPokemon(search) {
    let a = [];
    //Solo los pokemones que contienen en el nombre el string search
    a = pokemons.filter((poke) => {
      return poke.nombre.toLowerCase().includes(search.toLowerCase());
    });
    a = sortPokes(a, sorting);
    return a;
  }
  return (
    <div id="pokedex">
      <h3>ESTAS EN POKEDEX</h3>

      <TopComp id="topComp" setOrderFilter={setPokemonsOrdered} sortAndFilter={sortAndFilterPokemon} pokemonsOrdered={pokemonsOrdered} sorting={sorting} changeSorting={changeSorting} search={search} changeSearch={setSearch} />
      <BottomComp pokemones={pokemonsOrdered} />
    </div>
  );
}

export default Pokedex;
