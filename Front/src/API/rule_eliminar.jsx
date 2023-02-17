import API from "./rule_API";

export const eliminarPokemon = (id) => {
  return API.delete("/pokemon/eliminar/" + id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};