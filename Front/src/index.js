import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import BigCard from "./Componentes/BigCard/bigCard";
import Pokedex from "./Componentes/Pokedex/pokedex";

import ErrorComp from "./Componentes/ErrorComp/ErrorComp";
import Home from "./Componentes/HomePage/Home";

import PokemonFormComp from "./Componentes/PokemonFormComp/PokemonFormComp"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokedex />,
  },
  // {
  //   path: "pokedex",
  //   element: <Pokedex />,
  // },
  {
    path: "pokemons/:idPokemons",
    element: <BigCard />,
  },
  {
    path: "*",
    element: <ErrorComp />,
  },
  {
    path: "login",
    element: <Home/>,
  },
  {
    path: "agregar",
    element: <PokemonFormComp tarea="agregar"/>
  },
  {
    path: "editar",
    element: <PokemonFormComp tarea="editar/:id:"/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
