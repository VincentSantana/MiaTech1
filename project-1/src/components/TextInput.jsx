import { useState } from 'react';

const TextInput = () => {
  const [value, setValue] = useState('');  // Stato per mantenere il valore dell'input(mantiene i dati)

                      //event contiene il target, elemento che subisce l'evento click
  const handleChange = (event) => {  // Funzione per aggiornare lo stato quando cambia l'input
    setValue(event.target.value);
    console.log(event.target.value) //si vedono i valori su console log del testo che viene scritto in input
  };

  return (
    <div>
      <label htmlFor="textInput">Inserisci un testo: </label>
      <input type="text" onInput={handleChange} placeholder="Scrivi qui..."/>
      <p>Valore attuale: {value}</p>
    </div>
  );
};

export default TextInput;