import axios from "axios"

const URL = "https://jsonplaceholder.typicode.com/photos?_limit=100"

export const photoServices = {
    getPhotos
}

async function getPhotos() {
    return axios.get(URL)
        .then((res) => res)
        .catch((err) => err)
}