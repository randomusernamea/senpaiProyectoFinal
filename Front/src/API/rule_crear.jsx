import API from "./rule_API";

export const crearPokemon = (form) => {
  return API.post("/pokemon/nuevo", form)
    .then((response) => {
        console.log(form);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};