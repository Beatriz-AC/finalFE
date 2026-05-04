import { Link } from "react-router-dom";
import teamLogo from "../assets/img/logo time.webp";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={teamLogo} alt="Logo do time" height="50" />
      <h2>Produtos</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/list">Lista</Link>
        <Link to="/create">Cadastrar</Link>
      </div>
    </nav>
  );
}