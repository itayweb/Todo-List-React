import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import TodosContext from "../contexts/TodosContext";

function Todo(props) {
    const title = props.title;
    const date = props.date;
    const type = props.type;
    const id = props.uid;
    const todoStatus = type === "todo" ? "todo-body" : "todo-body-finished";
    const {finishTodo, returnTodo, deleteTodo, deleteDoneTodo} = useContext(TodosContext);

    const handleDeleteTodo = (event) => {
        if (type === "todo") {
            deleteTodo(event);
        }
        else if (type === "doneTodo") {
            deleteDoneTodo(event);
        }
    }

    const handleTodo = (event) => {
        if (type === "todo") {
            finishTodo(title, date, id, event);
        }
        else if (type === "doneTodo") {
            returnTodo(title, date, id, event);
        }
    }

    return (
        <Card style={{ width: '25rem'}} className="m-3" id="todo">
            <Card.Body>
                <Card.Text onClick={handleTodo} todotitle={id} className={todoStatus}>{title} {date}</Card.Text>
                <Button onClick={handleDeleteTodo} todotitle={id} variant="outline-danger"><AiFillDelete/></Button>
            </Card.Body>
        </Card>
    );
}

export default Todo;