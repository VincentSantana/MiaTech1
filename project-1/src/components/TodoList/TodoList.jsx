import { useEffect, useState } from "react";


export default function TodoList() {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        async function fetchTodos() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos")
                if (!res.ok) {
                    throw new Error(`Error during fetch data`);
                }
                const dati = await res.json();
                console.log(dati)
                setTodoList(dati)

            } catch (error) {
                console.log(error)
            }
        }

        fetchTodos();
    },[]);

    return (
        <>
              {todoList.map((todo) => ( //la chiave è l'id 
                <div className="border-1" key={todo.id}>{todo.title}</div>
            ))}
        </>

    )
}