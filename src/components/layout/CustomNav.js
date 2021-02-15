import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

const CustomNav = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand style={{ color: "#fff" }} href="/">Super Cool App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="mx-2" to="/">
                        Home
                        </Link>
                    <Link className="mx-2" to="/users">
                        Users
                        </Link>
                    <Link className="mx-2" to="/photos">
                        Photos
                        </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNav;