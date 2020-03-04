import axios from "axios";

// requires API URL still 

export const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: 'https://sleep-tracker-3.herokuapp.com/',
        headers: {
            Authorization: token
        }
    });
};