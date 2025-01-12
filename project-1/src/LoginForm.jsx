import { useState, useEffect } from "react";


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
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={LoginForm.user} onInput={handleUser} />
                <input type="password" name="password" value={LoginForm.passw} onInput={handlePass} />
                <button type="submit" onClick={handleAlarm}>Login</button>
            </form>
        </>

    );
};

export default LoginForm; 