import API from "Rule_API";

export const registerPokemon = async (pokemon) => {
    const REGISTER_URL = "/api/pokemon/nuevo";
    return await API.post(REGISTER_URL, pokemon)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const registerEstadistica = async (estadistica) => {
    const REGISTER_URL = "/api/estadistica/nuevo";
    return await API.post(REGISTER_URL, estadistica)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const registerTipo = async (tipo) => {
    const REGISTER_URL = "/api/tipo/nuevo";
    return await API.post(REGISTER_URL, tipo)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const updatePokemon = async (pokemon) => {
    const UPDATE_URL = "/api/pokemon/editar";
    return await API.put(UPDATE_URL, pokemon)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const updateEstadistica = async (estadistica) => {
    const UPDATE_URL = "/api/estadistica/editar";
    return await API.put(UPDATE_URL, estadistica)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const deletePokemon = async (pokemon) => {
    const DELETE_URL = "/api/pokemon/eliminar";
    return await API.delete(DELETE_URL, pokemon)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const listPokemons = async (pokemon) => {
    const LIST_URL = "/api/listaPokemones";
    return await API.get(LIST_URL, pokemon)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const authorization = API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)