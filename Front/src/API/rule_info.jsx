import API from "./rule_API";

export const getPokemones = async () => {
  let url = "/pokedex";
  return await API.get(url)
    .then((response) => {
      return response.data; //ARRAY de objetos es el data
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
