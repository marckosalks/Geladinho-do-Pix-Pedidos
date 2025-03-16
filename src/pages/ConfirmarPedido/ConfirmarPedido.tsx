import { useSabor } from "../../context/saborContext"
import DoPix from "../../assets/doPix.jpeg"
import "./styles.css"

export function ConfirmarPedido() {
  const{ sabor, preco, quantidade } = useSabor() 
  const telefone = 5511984410717
  
  function handleConfirmarPedido(){
    console.log("Essa função te leva pro meu zap zap ")
    
    const mensagem = `Olá Marcos, desejo fazer esse pedido abaixo:\n
    🍦 Sabor: ${sabor}
    🔢 Quantidade: ${quantidade}
    💵 Preço: ${preco.toFixed(2)} `
    
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    window.open(url,"_blank" )
  }

  return (
    <div className="cardConfirmacao">
      <h3>Confirmar seu Pedido</h3>

      <div className="containerPedidoRealizado">
        <div className="totalPedido">
            <span>🍦Sabores: {sabor}<br/>🔢 Quantidade: {quantidade} <br/> 💵 Preço: R${preco.toFixed(1)}</span>
        </div>
        <div className="caixaQrCode">
          <img className="qrCode" src={DoPix} alt="pix" />
        </div>
      </div>
      <button className="btnConfirmar" onClick={handleConfirmarPedido}>Confirmar pedido</button>
    </div>
  )
}
