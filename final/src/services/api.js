const API = "http://localhost:3000/produtos";

export const getProdutos = async () => {
  const res = await fetch(API);
  return res.json();
};

export const getProdutoById = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return res.json();
};

export const createProduto = async (produto) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });
  return res.json();
};

export const updateProduto = async (id, produto) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });
  return res.json();
};

export const deleteProduto = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};