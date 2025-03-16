import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex gap-2.5 p-2.5">
      <div>
    <Link to="/">Home</Link>
      </div>
      <div> 
      <Link to="/about">About</Link>
      </div>
      <div> 
      <Link to="/pokemons">Pokemons</Link>
      </div>
    </nav>
  )
}

export default Navbar
