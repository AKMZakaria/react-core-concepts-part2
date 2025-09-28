import { use } from "react"
import ToDo from "./ToDo"

export default function ToDos({ toDoPromise }) {
    const todos = use(toDoPromise)
    console.log(todos)
    return (
        <div>
            <h4>Todo: {todos.length}</h4>
            {
                todos.map(todo => <ToDo todo={todo}></ToDo>)
            }
        </div>
    )
}