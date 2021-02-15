import { Table } from "react-bootstrap";
import { useState, useEffect } from "react"
import TrashIcon from 'mdi-react/TrashIcon';
import { userServices } from "../../services/UserServices"

const UsersList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const deleteUser = (id) => {
        setUsers(
            users.filter(user => user.id !== id)
        )
    }

    useEffect(() => {
        userServices.getUsers()
            .then((res) => {
                setUsers(res.data)
                setLoading(false)
            }).catch(err => err)
    }, [])

    return (
        <>
            {loading ? "Loading" :
                <Table className="table mx-auto my-4" striped bordered hover variant="dark">
                    <thead className="m-2">
                        <tr>
                            <th>Name</th>
                            <th>Usrname</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td style={{ textAlign: "center" }}><TrashIcon className="pointer" onClick={() => deleteUser(user.id)} color="red" /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>}
        </>
    );
}

export default UsersList;