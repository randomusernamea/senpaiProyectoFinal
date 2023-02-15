import TopComp from "../TopComp/topComp";
import BottomComp from "../BottomComp/bottomComp";
import "./pokedex.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsOrdered, setPokemonsOrdered] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [search, setSearch] = useState("");
  const { idPokemons } = useParams;

  const consultarPokemons = () => {
    fetch("http://localhost:3000/pokemons", idPokemons, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setPokemons(data);
        setPokemonsOrdered(data);
      })
      .catch((error) => {
        alert(error.statusText);
      });
  };
  useEffect(() => {
    consultarPokemons();
  }, []);
  function changeSorting(param) {
    setSorting(param);
    let a = sortPokes(pokemonsOrdered, param);
    setPokemonsOrdered(a);
  }
  function sortPokes(a, sortOrder){
    a.sort((a, b) => {
      if (sortOrder === true) {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return -1;
      }
      if (sortOrder === false) {
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
    a = pokemons.filter((poke) => {
      return poke.nombre.toLowerCase().includes(search.toLowerCase());
    });
    a = sortPokes(a, sorting);
    return a;
  }
  return (
    <div id="pokedex">
      <TopComp
        id="topComp"
        setOrderFilter={setPokemonsOrdered}
        sortAndFilter={sortAndFilterPokemon}
        pokemonsOrdered={pokemonsOrdered}
        sorting={sorting}
        changeSorting={changeSorting}
        search={search}
        changeSearch={setSearch}
      />
      <BottomComp pokemones={pokemonsOrdered} />
    </div>
  );
}

export default Pokedex;
