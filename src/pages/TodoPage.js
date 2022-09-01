import { useContext, useState } from "react";
import Todo from "../components/Todo";
import TodosContext from "../contexts/TodosContext";

function TodoPage() {
    const {addTodo, todos} = useContext(TodosContext);
    const [todo, setTodo] = useState("");

    const handleSubmitTodo = (event) => {
        addTodo(todo, event);
        setTodo("");
    }

    return (
        <div>
            <h3>Add a todo</h3>
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
            <button onClick={handleSubmitTodo}>Add</button>
            <div>
                {
                    todos.map((todos, index) => {
                        return (
                            <div key={index}>
                                <Todo title={todos.title} date={todos.date} type="todo"/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TodoPage;