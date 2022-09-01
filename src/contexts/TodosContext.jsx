import { createContext, useState } from "react";

const TodosContext = createContext();

export function TodosProvider({children}) {
    const [todos, setTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);

    const addTodo = (title, event) => {
        event.preventDefault();
        const date = new Date().toLocaleString();
        setTodos(prevState => [{title, date}, ...prevState]);
    };

    const finishTodo = (title, date, event) => {
        setDoneTodos(prevState => [{ title, date }, ...prevState]);
        deleteTodo(title, date, event);
    };

    const returnTodo = (title, date, event) => {
        setTodos(prevState => [{title, date}, ...prevState]);
        deleteDoneTodo(title, date, event);
    }

    const deleteTodo = (title, date, event) => {
        // setTodos(todos.splice(todos.indexOf({title, date}, 1)));
        setTodos(todos.filter((todo) => {
            return todo.title !== event.target.getAttribute("todotitle");
        }));
    };

    const deleteDoneTodo = (title, date, event) => {
        setDoneTodos(doneTodos.filter((todo) => {
            return todo.title !== event.target.getAttribute("todotitle");
        }));
        // setDoneTodos(doneTodos.splice(todos.indexOf({title, date}, 1)));
    };



    return (
        <TodosContext.Provider value={{todos, doneTodos, addTodo, finishTodo, returnTodo, deleteTodo, deleteDoneTodo}}>
            {children}
        </TodosContext.Provider>
    );
}

export default TodosContext;