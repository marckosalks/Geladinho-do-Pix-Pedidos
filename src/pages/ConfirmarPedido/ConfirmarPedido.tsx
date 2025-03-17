import { useSabor } from "../../context/saborContext"; 
import { useNavigate } from "react-router";

import DoPix from "../../assets/doPix.jpeg";
import "./styles.css";


export function ConfirmarPedido() {
  const { pedidos } = useSabor(); 
  const navigate = useNavigate();
  const telefone = 5511984410717;

  // 🔹 Cálculo do total de todos os pedidos
  const totalPedidos = pedidos.reduce((total, pedido) => total + pedido.preco, 0);

  function handleConfirmarPedido() {
    const saudacao = "Olá, desejo fazer essa encomenda:\n";

    const mensagemPedidos = pedidos
      .map(
        (pedido, index) =>
          `\nPedido ${index + 1}:\n🍦 Sabor: ${pedido.sabor}\n🔢 Quantidade: ${pedido.quantidade}\n💵 Preço: R$${pedido.preco.toFixed(2)}\n`
      )
      .join("\n");

    const mensagemFinal = `${saudacao}${mensagemPedidos}\n🔹 *Total: R$${totalPedidos.toFixed(2)}*`;

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagemFinal)}`;
    window.open(url, "_blank");
  }

  function handleNovoPedido() {
    navigate("/"); 
  }

  return (
    <div className="cardConfirmacao">
      <h3>Confirmar seu Pedido</h3>

      {pedidos.length === 0 ? (
        <p>Nenhum pedido realizado.</p>
      ) : (
        pedidos.map((pedido, index) => (
          <div key={index} className="containerPedidoRealizado">
            <div className="totalPedido">
              <span>
                🍦 Sabor: {pedido.sabor}
                <br />🔢 Quantidade: {pedido.quantidade}
                <br /> 💵 Preço: R${pedido.preco.toFixed(2)}
              </span>
            </div>
          </div>
        ))
      )}

      <div className="caixaQrCode">
        <img className="qrCode" src={DoPix} alt="pix" />
      </div>

      <span>Total: R$ {totalPedidos.toFixed(2)}</span>

      <button className="btnConfirmar" onClick={handleConfirmarPedido}>
        Confirmar pedido
      </button>
       ou 
      <button className="btnNovoPedido" onClick={handleNovoPedido}>
        Fazer novo pedido
      </button>
    </div>
  );
}
