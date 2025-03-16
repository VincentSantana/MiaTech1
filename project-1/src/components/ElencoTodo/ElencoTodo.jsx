import { Link } from "react-router-dom";
import TodoList, { useTodos } from "../../components/TodoList/TodoList.jsx";

const ElencoTodo = () => {
    const { todos } = useTodos();
  return (
    <div>
    <h2 className="text-2xl font-bold">Lista To-Do</h2>
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="border p-2 my-2">
          <Link to={`/todo/${todo.id}`} className="text-blue-500 hover:underline">
            {todo.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ElencoTodo
