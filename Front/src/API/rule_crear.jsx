import API from "./rule_API";

export const crearPokemon = (form) => {
  return API.post("/pokemon/nuevo", form)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};