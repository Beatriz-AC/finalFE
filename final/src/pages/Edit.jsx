import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProdutoById, updateProduto } from "../services/api";
import Form from "../components/Form";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    getProdutoById(id).then(setProduto);
  }, [id]);

  const handleSubmit = async (form) => {
    await updateProduto(id, form);
    alert("Atualizado com sucesso");
    navigate("/list");
  };

  if (!produto) return <p className="mensagem">Carregando...</p>;

  return (
    <div>
      <h2>Editar Produto</h2>
      <Form produtoEditando={produto} onSubmit={handleSubmit} />
    </div>
  );
}