import API from "./rule_API";

export const loguearUsuario = async (form) => {
    console.log(form)
  return await API.post("/login", form)
    .then((response) => {
        console.log(response)
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};