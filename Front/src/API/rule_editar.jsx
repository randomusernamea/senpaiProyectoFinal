import API from "./rule_API";

export const editarPokemon = (form) => {
  return API.put("/pokemon/editar", form)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};