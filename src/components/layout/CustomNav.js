import { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import LogoutIcon from 'mdi-react/LogoutIcon';

const CustomNav = () => {
    const [token, setToken] = useState()

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand style={{ color: "#fff" }} href="/">Super Cool App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto px-4">
                    <Link className="mx-2" to="/">
                        Home
                        </Link>
                    <Link className="mx-2" to="/users">
                        Users
                        </Link>
                    {token && <Link className="mx-2" to="/photos">
                        Photos
                        </Link>}
                    {!token && <Link className="mx-2" to="/login">
                        Login
                    </Link>}
                    {token && <span className="text-light pointer">Logout<LogoutIcon className="text-light" onClick={handleLogout} /></span>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNav;