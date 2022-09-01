import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";
import Todo from "../components/Todo";

function DonePage() {
    const {doneTodos} = useContext(TodosContext);

    return (
        <div>
            <h3>Finished Todos</h3>
            <div>
                {
                    doneTodos.map((doneTodos, index) => {
                        return (
                            <div key={index}>
                                <Todo title={doneTodos.title} date={doneTodos.date} type="doneTodo"/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default DonePage;