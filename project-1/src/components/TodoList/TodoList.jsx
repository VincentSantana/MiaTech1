import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../../store/slices/todosSlice';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.items);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (todos.length === 0 && !loading && !error) {
      dispatch(fetchTodos());
    }
  }, [dispatch, todos, loading, error]);

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return "sta caricando...";
  if (error) return `problema nella carica dei dati: ${error}`;

  console.log(loading);
  console
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="cerca qui..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

/*import { useFetch } from "../Hooks/useFetch";
import { useFilteredTodos } from "../Hooks/useFilteredTodos"; 
import { createContext, useContext, useEffect, useRef, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos"
//esercizio dei useContext e provider
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error("Error during fetch data");

                const data = await res.json();
                setTodos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    return (
        <TodoContext.Provider value={{ todos, loading, error }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext) //fino qua uso del useContext

export default function TodoList() {
    //mi permite usarlo en todos los componentes
const {data: todos = [], error, loading, fetchTodos} = useFetch(API_URL, {method: "GET"});
const [searchTerm, setSearchTerm] = useState("");
const inputRef = useRef();


const filteredTodos = useFilteredTodos(todos, searchTerm);
if (loading) return "sta caricando..."
if (error) return "problema nella carica dei dati..."

const handleFocusInput = () => {
    inputRef.current.focus();
}
    return (
        <>
        <input ref={inputRef} type="text" placeholder="cerca qui..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
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
}*/