import { useEffect, useRef, useState } from "react"

export default function ItemList({item}) {
    const [counter, setCounter] = useState(0)
    const counterRef = useRef(0)

    function List(){
        console.log("Ciao")
    }

    function increment() {
        setCounter((_counter) => {
            return _counter + 1;
        })
    }

    function incrementR() {
       counterRef.current += 1
       alert('You clicked ' + counterRef.current + ' times!');
    }


    useEffect(() => List(),
[])// ogni volta che viene cliccato lui si aggiorna, solo quando viene cliccato, se le quadre sono vuote si carica solo 1 volta

    return (
        <>
        <li>{item} <button onClick={incrementR}>x</button></li>
        <div>{counterRef.current}</div>

        </>)
}