import React, { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import TodosContext from "../contexts/TodosContext";

function Todo(props) {
    const title = props.title;
    const date = props.date;
    const type = props.type;
    const {finishTodo, returnTodo, deleteTodo, deleteDoneTodo} = useContext(TodosContext);
    const [optionsState, setOptionsState] = useState(false);

    const todoOptions = (event) => {
        if (type === "todo") {
            deleteTodo(title, date, event);
        }
        else if (type === "doneTodo") {
            deleteDoneTodo(title, date, event);
        }
    }

    const handleTodo = (event) => {
        if (type === "todo") {
            finishTodo(title, date, event);
        }
        else if (type === "doneTodo") {
            returnTodo(title, date, event);
        }
    }

    return (
        <div>
            <button type="button" onClick={handleTodo} todotitle={title}>{title} {date}</button>
            <button type="button" onClick={todoOptions} todotitle={title}><AiFillDelete/></button>
        </div>
    );
}

export default Todo;