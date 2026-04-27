import { useState, useEffect } from "react";

export default function Form({ onSubmit, produtoEditando }) {
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    estoque: "",
    categoria: "",
  });

  useEffect(() => {
    if (produtoEditando) {
      setForm(produtoEditando);
    }
  }, [produtoEditando]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nome, preco, estoque, categoria } = form;

    if (!nome || !preco || !estoque || !categoria) {
      alert("Preencha todos os campos");
      return;
    }

    onSubmit({
      ...form,
      preco: parseFloat(preco),
      estoque: parseInt(estoque),
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" />
      <input name="preco" value={form.preco} onChange={handleChange} placeholder="Preço" />
      <input name="estoque" value={form.estoque} onChange={handleChange} placeholder="Estoque" />
      <input name="categoria" value={form.categoria} onChange={handleChange} placeholder="Categoria" />

      <button type="submit">Salvar</button>
    </form>
  );
}