import { useState, useEffect } from "react"
import UsersList from "./users/UsersList"
import { userServices } from "../services/UserServices"

const Home = () => {
    const [users, setUsers] = useState([])


    const deleteUser = (id) => {
        setUsers(
            users.filter(user => user.id !== id)
        )
        console.log("Deleted")
    }

    useEffect(() => {
        userServices.getUsers()
            .then((res) => {
                setUsers(res.data)
            }).catch(err => err)
    }, [])

    return (
        <UsersList users={users} onDelete={deleteUser} />
    );
}

export default Home;