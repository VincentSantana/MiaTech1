import { useRef, useState } from 'react';

const TextInput = () => {
  const [value, setValue] = useState('');  // Stato per mantenere il valore dell'input(mantiene i dati)
  const counter = useRef(0) //se puede usar mayormente para entrar con password
                      //event contiene il target, elemento che subisce l'evento click
  const handleChange = (event) => {  // Funzione per aggiornare lo stato quando cambia l'input
    setValue(event.target.value);
    console.log(event.target.value) //si vedono i valori su console log del testo che viene scritto in input
    console.log(counter.current.value)
  };

  return (
    <div>
      <label htmlFor="textInput">Inserisci un testo: </label>
      <input type="text" onInput={handleChange} placeholder="Scrivi qui..."/>
      <input type="text" ref={counter} placeholder='counter' />
      <p>Valore attuale: {value}</p>
      {counter.current.value}
    </div>
  );
};

export default TextInput;