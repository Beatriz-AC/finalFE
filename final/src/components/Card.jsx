export default function Card({ produto, onDelete, onEdit }) {
  return (
    <div className="card">
      <h3>{produto.nome}</h3>
      <p>💰 R$ {produto.preco}</p>
      <p>📦 Estoque: {produto.estoque}</p>
      <p>🏷️ {produto.categoria}</p>

      <div className="actions">
        <button onClick={() => onEdit(produto)}>Editar</button>
        <button onClick={() => onDelete(produto.id)}>Excluir</button>
      </div>
    </div>
  );
}