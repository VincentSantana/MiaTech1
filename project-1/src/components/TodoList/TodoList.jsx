import { useFetch } from "../Hooks/useFetch";
import { useFilteredTodos } from "../Hooks/useFilteredTodos"; 
import { useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos"

export default function TodoList() {
    //mi permite usarlo en todos los componentes
const {data: todos = [], error, loading, fetchTodos} = useFetch(API_URL, {method: "GET"});
const [searchTerm, setSearchTerm] = useState("");


const filteredTodos = useFilteredTodos(todos, searchTerm);

    return (
        <>
        <input type="text" placeholder="cerca qui..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
             <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      filteredTodos && filteredTodos.map((todo) => ( //la chiave è l'id 
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.userId}</td>
                                <td>{todo.title}</td>
                            </tr>
                            
                         ))
                    }
                </tbody>
             </table>
        </>

    )
}