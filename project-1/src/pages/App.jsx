import { useState, useEffect } from "react";
import Calcolatrice from "./Calcolatrice.jsx"

const Title = ({ title }) => {
  return (
    <h1 style={{ color: "red" }}>{title}</h1>
  );
}



const App = () => {
  const [counter, setCounter] = useState(0);  //Una tipologia di hooks: State


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

  return (
    <div>
      <Title title="Ciao World" />
      <Title title="Ciao Camilla" />

      <div>
        <div><h2>Valore del Count:{counter}</h2></div>
        <button onClick={handleClickBtn}>Aggiungi</button> <button onClick={handleClickBtnLess}>Ridurre</button> <button onClick={handleClickBtnZero}>Azzera</button>
        <p>
          Count: {counter}
        </p>

        <Calcolatrice />
      </div>
    </div>

  );
};

export default App; 