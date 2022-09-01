import { Link } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai"
import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

function Nav() {
    const {todos, doneTodos} = useContext(TodosContext)
    return (
        <nav>
            <Link to={"/"}>
                <h1>AppName</h1>
            </Link>
            <Link to={"/todo"}>
                <h1>Todos</h1>
                <span>{todos.length}</span>
            </Link>
            <Link to={"/done"}>
                <h1>Done</h1>
                <span>{doneTodos.length}</span>
            </Link>
            <Link to={"/help"}>
                <AiFillQuestionCircle/>
            </Link>
        </nav>
    );
}

export default Nav;