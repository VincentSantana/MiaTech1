import { useState } from "react";
import Pokemon from "../Pokemons/Pokemon";
import TodoList from "../../components/TodoList/TodoList";


const LoginForm = () => {
    const [user, setUser] = useState('');

    const [passw, setPassw] = useState('');

    const handleUser = (event) => {
       setUser(event.target.value)
       
    }

    const handlePass = (event) => {
        setPassw(event.target.value)
     }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(user);
        console.log(passw);
    }

    const handleAlarm = (event) => {
        alert("Attenzione aggiungere email e password!!")
    }

    return (
        <>

            <form onSubmit={handleSubmit} className="m-4 p-4 border-1">
                <input type="email" name="email" placeholder="inserisci la tua email" value={LoginForm.user} onInput={handleUser} />
                <input type="password" name="password" placeholder="password..." value={LoginForm.passw} onInput={handlePass} />
                <button className="flex border-1 p-2 rounded-xl" type="submit" onClick={handleAlarm}>Login</button>
            </form>
           
        </>
    );
};

export default LoginForm; 