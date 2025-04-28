import { useSelector } from "react-redux";
import React from "react";
import TodoList from "../../components/TodoList/TodoList.jsx";
//"/"-> http://localhost:PORT

const Home = () => {
  const todos = useSelector((state) => state.todos.items);// Ottieni l'array di to-do dallo stato di Redux

  return (
    <div className="m-5">
      {todos.map(todo => {
        <div key={todo.id}>{todo.title}</div>
      })};
       {/* Potresti voler anche renderizzare qui il componente TodoList */}
       <TodoList /> 
    </div>
  )
}

export default Home
