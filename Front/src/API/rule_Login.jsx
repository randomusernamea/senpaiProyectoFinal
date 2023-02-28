import API from "./rule_API";

export const loguearUsuario = async (form) => {
  return await API.post("/login", form)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = async () => {
  const DELETE_URL = "/logout";
  return await API.delete(DELETE_URL)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
