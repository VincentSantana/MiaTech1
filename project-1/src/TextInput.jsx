import { useState } from 'react';

const TextInput = () => {
  const [value, setValue] = useState('');  // Stato per mantenere il valore dell'input


  const handleChange = (event) => {  // Funzione per aggiornare lo stato quando cambia l'input
    setValue(event.target.value);
    console.log(event.target.value)
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