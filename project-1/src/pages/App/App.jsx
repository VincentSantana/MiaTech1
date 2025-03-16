import { useState, useEffect, } from "react";
import Calcolatrice from "../../components/Calcolatrice.jsx"
import ItemList from "../../components/ItemList.jsx";
import Card from "../../components/Card.jsx";
import TodoList, { useTodos } from "../../components/TodoList/TodoList.jsx";
import {Route, Routes} from "react-router-dom"
import Home from "../home/Home.jsx";
import About from "../About/About.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";



const Title = ({ title }) => {
  return (
    <h1 style={{ color: "red" }}>{title}</h1>
  );
}

const items = ["penna", "matita", "cancelleto", "quaderno"]

//USA rafce para crear funciones en automatico de un componente
const App = () => {
  const [counter, setCounter] = useState(0);  //Una tipologia di hooks: State
  const {todos} = useTodos();//serve per usare il useContext 


  const handleClickBtn = () => {  //funzione che aumenta il count
    setCounter((_counter) => {
      return _counter + 1; //callback
    });
  }

  const handleClickBtnLess = () => { //funzione che diminuisce il count
    setCounter((_less) => {
      return _less - 1;
    });
  }

  const handleClickBtnZero = () => { //funzione che azzera il count
    setCounter((_cancel) => {
      return _cancel = 0;
    });
  }

  //useEffect: fa aggiornamenti ai componenti
  useEffect(/* questa call back non puo essere mai async*/() => {
    document.title = `Count: ${counter}`;

  }, [counter]/* entra nelle dipendenze di useEffect*/);/*se le parentesi quadre[] non ci sono allora non ci saranno modifiche, se sono vuote allora non fa niente, se invece hanno un valore[counter] aggiorna o modifica ogni volta che facciamo click questo valore*/
  if (!todos) return <p>Cargando datos...</p>;
  return (
    <div className="m-5">
      <Title title="Ciao World" />

      <div>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
      </div>

      <ul>
        {
          items.map((item, index) => (
            <ItemList key={index} item={item}/>
          ))
        }
      </ul>
        {/*esercizio dei useContext */}
      <div className="m-5 hidden">
        {todos.map(todo => {
          return (
            <div key={todo.id}>{todo.title}</div>
          )
        })};
      </div>
      
      <div>
      <Card> 
        <h2>Titolo della Card</h2>
        <p>Ora si vede.</p>
      </Card>
      </div>

      <div className="m-5">
        <div className="bg-green-500 text-white p-4"><h2>Valore del Count:{counter}</h2></div>
        <button onClick={handleClickBtn}>Aggiungi</button> <button onClick={handleClickBtnLess}>Ridurre</button> <button onClick={handleClickBtnZero}>Azzera</button>
        <p>
          Count: {counter}
        </p>

        <Calcolatrice />
        <TodoList />
      </div>
    </div>

  );
};

export default App; 