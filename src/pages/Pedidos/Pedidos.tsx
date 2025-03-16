import { useState } from "react"
import { useSabor } from "../../context/saborContext";
import { useNavigate } from "react-router";

import "./styles.css"

export default function Pedidos() {
  const [quantidadeCount, setQuantidadeCount] = useState(0);
  const { sabor, setPreco, setQuantidade } = useSabor()
  const { itensPedido } = useSabor()
  const navigate = useNavigate()

  const novoArray = itensPedido.filter(item => sabor === item.titulo)

  const pedido = {
    titulo: novoArray[0].titulo,
    descricao: novoArray[0].descricao,
    imagem: novoArray[0].imagem
  }

  function handlePedido (){
    if(quantidadeCount == 0){
      return
    }else{

      setPreco(quantidadeCount * 2.5)
      
      setQuantidade(quantidadeCount)

      navigate("/confirmar")
    }
    
  }

  return (

    <div className="containerPedidos">
      <h3>{pedido.titulo}</h3>

      <div className="cardSabor">
        <img className="pedidoImagem" src={pedido.imagem} alt="" />
        <p className="textoSpbreposto">{pedido.descricao}</p>
      </div>

      <div className="containerFooter">
        <div className="containerQtd">
          {quantidadeCount === 0 ? <button disabled></button>
            : <button onClick={() => setQuantidadeCount(quantidadeCount - 1)}>-</button>}

          {quantidadeCount === 0 && !quantidadeCount ? <span></span> : <span>{quantidadeCount}</span>}
          
          <button onClick={() => setQuantidadeCount(quantidadeCount + 1)}>+</button>
        </div>

        <div className="containerValor">
          <button onClick={handlePedido}>Adicionar</button>
          <span>R${quantidadeCount * 2.5}</span>
        </div>
      </div>
    </div>
  )
}
