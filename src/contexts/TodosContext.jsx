import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosContext = createContext();

export function TodosProvider({children}) {
    const [todos, setTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);

    const addTodo = (title, event) => {
        event.preventDefault();
        const date = new Date().toLocaleString();
        const id = uuidv4();
        setTodos(prevState => [{title, date, id}, ...prevState]);
    };

    const finishTodo = (title, date, id, event) => {
        setDoneTodos(prevState => [{ title, date , id }, ...prevState]);
        deleteTodo(event);
    };

    const returnTodo = (title, date, id, event) => {
        setTodos(prevState => [{title, date, id}, ...prevState]);
        deleteDoneTodo(event);
    }

    const deleteTodo = (event) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== event.target.getAttribute("todotitle");
        }));
    };

    const deleteDoneTodo = (event) => {
        setDoneTodos(doneTodos.filter((todo) => {
            return todo.id !== event.target.getAttribute("todotitle");
        }));
    };



    return (
        <TodosContext.Provider value={{todos, doneTodos, addTodo, finishTodo, returnTodo, deleteTodo, deleteDoneTodo}}>
            {children}
        </TodosContext.Provider>
    );
}

export default TodosContext;