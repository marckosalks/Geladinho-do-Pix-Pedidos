import { useSabor } from "../../context/saborContext";

export function HistoricoPedidos() {
  const { pedidos } = useSabor();

  return (
    <div>
      <h2>Histórico de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            🍦 {pedido.sabor} | 🔢 {pedido.quantidade} | 💵 R$ {pedido.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
