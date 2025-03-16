import { useParams } from "react-router-dom";
import { useTodos } from "../../components/TodoList/TodoList.jsx";


const TodoDetails = () => {
  const { id } = useParams(); // Ottiene l'ID dalla URL
  const { todos } = useTodos(); // Ottiene i todos dal context
  const todo = todos.find(todo => todo.id.toString() === id); // Trova il to-do corrispondente

  if (!todo) {
    return <h2>To-Do non trovato</h2>;
  }

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{todo.title}</h2>
      <p className="text-sm text-gray-500">Stato: {todo.completed ? "Completato" : "Incompleto"}</p>
    </div>
  );
};

export default TodoDetails;
