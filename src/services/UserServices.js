import axios from "axios"

const URL = "https://jsonplaceholder.typicode.com/users"

export const userServices = {
    getUsers
}

async function getUsers() {
   return axios.get(URL)
        .then((res) => res).catch((err) => {
            console.log(err)
            return err.response
        })
}