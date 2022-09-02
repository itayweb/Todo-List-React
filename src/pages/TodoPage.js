import { useContext, useState } from "react";
import Todo from "../components/Todo";
import TodosContext from "../contexts/TodosContext";
import { Button, Modal } from "react-bootstrap";

function TodoPage() {
    const {addTodo, todos} = useContext(TodosContext);
    const [todo, setTodo] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(!showPopup);
    }

    const handleSubmitTodo = (event) => {
        if (todo === "") return;
        handleShowPopup();
        addTodo(todo, event);
        setTodo("");
    }

    return (
        <div className="list">
            <h3 className="mt-2">To-dos</h3>
            <h5 className="todo-title">Add a to-do</h5>
            <Button variant="success" onClick={handleShowPopup}>+</Button>
            <Modal show={showPopup} onHide={handleShowPopup}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new to-do</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="To-do title"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmitTodo}>Add</Button>
                </Modal.Footer>
            </Modal>
            <div>
                {
                    todos.map((todos, index) => {
                        return (
                            <div key={index}>
                                <Todo title={todos.title} date={todos.date} uid={todos.id} type="todo"/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TodoPage;