import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { useState, useEffect } from "react";

const ElencoTodo = () => {
  // Ottieni l'array di to-do dallo stato di Redux
  const todos = useSelector((state) => state.todos.items);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  // Aggiorna i parametri della query quando cambia il searchTerm
  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ q: searchTerm });
    } else {
      setSearchParams({});
    }
  }, [searchTerm, setSearchParams]);

  // Filtra i To-Do in base al termine di ricerca
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold">Elenco dei To-Do</h2>

      <input
        type="text"
        placeholder="Cerca un To-Do..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="border p-2 my-2">
            <Link to={`/todo/${todo.id}`} className="text-blue-500 hover:underline">
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElencoTodo;

/*import { Link, useSearchParams } from "react-router-dom";
import { useTodos } from "../../components/TodoList/TodoList.jsx";
import { useState, useEffect } from "react";

const ElencoTodo = () => {
    const { todos } = useTodos();
    const [searchParams, setSearchParams] = useSearchParams();//di react-router-dom viene usato per gestire i parametri della query string nell'URL.
    const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");//per gestire il valore di ricerca(target.value) e la q rimane come valore predefinito se presente nell'url ad esempio: q=delectus se viene ricercata la parola delectus

    // Aggiorna i parametri della query quando cambia il searchTerm
    useEffect(() => {
        if (searchTerm) {
            setSearchParams({ q: searchTerm });
        } else {
            setSearchParams({});
        }
    }, [searchTerm, setSearchParams]);

    // Filtra i To-Do in base al termine di ricerca
    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2 className="text-2xl font-bold">Elenco dei To-Do</h2>

            <input type="text"
                placeholder="Cerca un To-Do..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} />

            <ul>
                {filteredTodos.map(todo => (
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

export default ElencoTodo*/
