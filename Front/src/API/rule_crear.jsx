import API from "./rule_API";

export const crearPokemon = (form) => {
  //Debido a que paso un form asigno el header
  return API.post("/pokemon/nuevo", form, {headers: { "Content-Type": "multipart/form-data"}} )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return (error)
    });
};