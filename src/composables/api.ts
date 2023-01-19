import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
        if (error.response.status === 401) {
            localStorage.clear();
            window.location.reload();
        }
        throw error;
    }
);

export default api;
