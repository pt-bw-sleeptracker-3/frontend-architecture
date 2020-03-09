import axios from "axios";

export const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: 'https://sleep-tracker-3.herokuapp.com/',
        headers: {
            Authorization: token
        }
    });
};