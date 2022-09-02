import { Link } from "react-router-dom";
import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
    const {todos, doneTodos} = useContext(TodosContext)
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/todo">MyDo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/todo">To-do {todos.length}</Nav.Link>
                        <Nav.Link as={Link} to="/done">Done {doneTodos.length}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;