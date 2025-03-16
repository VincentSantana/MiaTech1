import TodoList, { useTodos } from "../../components/TodoList/TodoList.jsx";
//"/"-> http://localhost:PORT

const Home = () => {
    const {todos} = useTodos();
  return (
    <div className="m-5">
        {todos.map(todo => {
          return (
            <div key={todo.id}>{todo.title}</div>
          )
        })};
      </div>
  )
}

export default Home
