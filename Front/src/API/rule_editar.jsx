import API from "./rule_API";

export const editarPokemon = (form) => {
  //Debido a que paso un form asigno el header
  return API.put("/pokemon/editar", form, {headers: { "Content-Type": "multipart/form-data" }}  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return (error)
    });
};