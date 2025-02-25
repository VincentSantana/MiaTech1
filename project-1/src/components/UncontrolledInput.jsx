import { useRef } from "react";

const UncontrolledInput = () => {
  // Creamos una referencia para el input
  const inputRef = useRef();

  // Función para manejar el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Accedemos al valor actual del input usando la referencia
    const inputValue = inputRef.current.value;
    alert(`Valor ingresado: ${inputValue}`);//acepta solo 1 argumento

    //limpia el input
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingresa texto:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UncontrolledInput;
