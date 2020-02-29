import axios from "axios";

// requires API URL still 

export const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "api/url/here",
        headers: {
            Authorization: token
        }
    });
};