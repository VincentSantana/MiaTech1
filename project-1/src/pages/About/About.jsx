import { useNavigate } from "react-router-dom";
//"/"-> http://localhost:PORT/about

const About = () => {
  const navigate = useNavigate();
  //mi creo una funzione che usi il navigate
  const handleGoHome = () => {
    navigate("/"); // Redirige a la página Home
  };

  return (
    <>
    <h1 className="bg-indigo-800 text-white p-4">
     iniziero ad usare questo modo per organizzare gli esercizi
    </h1>
    <button className=" border border-b-blue-400 m-2 rounded-2xl pointer shadow-2xl p-2" onClick={handleGoHome}>torna a Home</button>
    </>
  )
}

export default About
