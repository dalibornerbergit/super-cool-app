import { Table } from "react-bootstrap";
import TrashCanCircleIcon from 'mdi-react/TrashCanCircleIcon';

const UsersList = ({ users, onDelete }) => {

    return (
        <Table className="table" striped bordered hover variant="dark">
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
                        <td style={{ textAlign: "center" }}><TrashCanCircleIcon onClick={() => onDelete(user.id)} color="red" /></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default UsersList;