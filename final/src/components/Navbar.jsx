import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>📦 Produtos</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/list">Lista</Link>
        <Link to="/create">Cadastrar</Link>
      </div>
    </nav>
  );
}