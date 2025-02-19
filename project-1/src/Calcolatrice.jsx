import { useState } from "react"


//fare 2 input che quando inserisco dei numeri con bottone si sommano i 2
export default function Calcolatrice() {
   const [sommaA, setSommaA] = useState(0); //si devono fare 3 stati perche il useState restituisce solo 2 valori
   const [sommaB, setSommaB] = useState(0);
   const [somma, setSomma] = useState(0);

function handleSomma() {
    setSomma(Number(sommaA) + Number(sommaB)); //Number() converte gli input in numeri
};

    //onChange aggiorna lo stato
    return (
        <>   
        <label htmlFor="somma_a">somma A:</label>
        <input type="number" value={sommaA} onChange={(e) => setSommaA(e.target.value)} /> 
        <label htmlFor="somma_b">somma B:</label>
        <input type="text" value={sommaB} onChange={(e) => setSommaB(e.target.value)}/>
        <button onClick={handleSomma}>somma</button>
        <div>{somma}</div>
        </>

    )

}