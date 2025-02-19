import { useState } from "react"


//fare 2 input che quando inserisco dei numeri con bottone si sommano i 2
export default function Calcolatrice() {
   const [somma, setSommaA] = useState(0);



    return (
        <>
        <label htmlFor="somma_a">somma A:</label>
        <input type="text" />
        <label htmlFor="somma_b">somma B:</label>
        <input type="text" />
        <button>somma</button>
        <div>{somma}</div>
        </>

    )

}