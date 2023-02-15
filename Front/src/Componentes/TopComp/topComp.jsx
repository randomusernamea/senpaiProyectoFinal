import "./topComp.css";
import { useState } from "react";
import img from "./Imgs/Pokeball.png";

function TopComp(params) {
  const inputChange = (e) => {
    params.changeSearch(e.target.value);
    let a = params.sortAndFilter(e.target.value);
    params.setOrderFilter(a);
  };

  const sortChange = (e) => {
    params.changeSorting (e.target.value);
  }




  return (
    <div id="topComp">
      <img id="pokeballImg" src={img} alt="pokeball" />
      <h1 id="topCompTitle">Pokedex</h1>
      <button
        id="topCompSortingButton"
        className={`changeSortingButton changeSortingButton${params.sorting}`}
        onClick={() => params.changeSorting(!params.sorting)}
      ></button>
      <input
        id="topCompInput"
        placeholder="Search"
        onChange={inputChange}
        type="text"
        value={params.search}
      />
    </div>
  );
}

export default TopComp;
