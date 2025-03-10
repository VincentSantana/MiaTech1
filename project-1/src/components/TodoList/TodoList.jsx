import { useFetch } from "../Hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos"

export default function TodoList() {
    //mi permite usarlo en todos los componentes
const {data: todos} = useFetch(API_URL, {method: "GET"});

    return (
        <>
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
                      todos && todos.map((todo) => ( //la chiave è l'id 
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