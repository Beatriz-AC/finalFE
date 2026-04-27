import { useEffect, useState } from "react";
import { getProdutos, deleteProduto } from "../services/api";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function List() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const carregar = async () => {
    try {
      const data = await getProdutos();
      setProdutos(data);
    } catch {
      alert("Erro ao carregar");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Deseja excluir?")) return;
    await deleteProduto(id);
    carregar();
  };

  const handleEdit = (produto) => {
    navigate(`/edit/${produto.id}`);
  };

  if (loading) return <p className="mensagem">Carregando...</p>;
  if (produtos.length === 0) return <p className="mensagem">Sem dados</p>;

  return (
    <div className="lista">
      {produtos.map((p) => (
        <Card key={p.id} produto={p} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
}