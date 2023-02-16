import API from "Rule_API";

export const login = async (usuario) => {
    const LOGIN_URL = "/api/login";
    return await API.post(LOGIN_URL, usuario)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const registerUser = async (usuario) => {
    const REGISTER_URL = "/api/register";
    return await API.post(REGISTER_URL, usuario)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const updateUser = async (usuario) => {
    const UPDATE_URL = "/api/update";
    return await API.put(UPDATE_URL, usuario)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const deleteUser = async (usuario) => {
    const DELETE_URL = "/api/delete";
    return await API.delete(DELETE_URL, usuario)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const listUsers = async (usuario) => {
    const LIST_URL = "/api/usuarios";
    return await API.get(LIST_URL, usuario)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const logout = async () => {
    const DELETE_URL = "/api/logout";
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
