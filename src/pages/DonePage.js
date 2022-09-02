import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";
import Todo from "../components/Todo";

function DonePage() {
    const {doneTodos} = useContext(TodosContext);

    return (
        <div className="list">
            <h3>Finished todos</h3>
            <div>
                {
                    doneTodos.map((doneTodos, index) => {
                        return (
                            <div key={index}>
                                <Todo title={doneTodos.title} date={doneTodos.date} uid={doneTodos.id} type="doneTodo" className="todo-done"/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default DonePage;