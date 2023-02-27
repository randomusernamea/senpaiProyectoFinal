import API from "./rule_API";

export const crearPokemon = (form) => {
  console.log(form)
  console.log(form.get('Imagen'))
  console.log(form.get('Pokemon'))
  return API.post("/pokemon/nuevo", form, {headers: { "Content-Type": "multipart/form-data" }} )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};