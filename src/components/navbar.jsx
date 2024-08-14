import { Container, Navbar, Nav } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function NavBar( {href, brandName} ) {
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={href}>{brandName}</Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
     );
}

export default NavBar;