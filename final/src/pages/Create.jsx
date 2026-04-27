import Form from "../components/Form";
import { createProduto } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    await createProduto(form);
    alert("Criado com sucesso");
    navigate("/list");
  };

  return (
    <div>
      <h2>Novo Produto</h2>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}