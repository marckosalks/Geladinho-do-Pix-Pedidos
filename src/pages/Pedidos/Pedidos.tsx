import { useState } from "react"
import { useSabor } from "../../context/saborContext";

import "./styles.css"
import { useNavigate } from "react-router";

export default function Pedidos() {
  const [quantidade, setQuantidade] = useState(0);
  const { itensPedido } = useSabor()
  const { sabor } = useSabor()
  const navigate = useNavigate()

  const novoArray = itensPedido.filter(item => sabor === item.titulo)

  const pedido = {
    titulo: novoArray[0].titulo,
    descricao: novoArray[0].descricao,
    imagem: novoArray[0].imagem
  }

  function handlePedido (){
    if(quantidade == 0){
      return
    }else{
      const objPedido = {
        sabor: pedido.titulo,
        qtd: quantidade * 2.5,
      }
      console.log(objPedido)

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
          {quantidade === 0 ? <button disabled onClick={() => setQuantidade(quantidade - 1)}></button>
            : <button onClick={() => setQuantidade(quantidade - 1)}>-</button>}

          {quantidade === 0 && !quantidade ? <span></span> : <span>{quantidade}</span>}
          
          <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
        </div>

        <div className="containerValor">
          <button onClick={handlePedido}>Adicionar</button>
          <span>R${quantidade * 2.5}</span>
        </div>
      </div>
    </div>
  )
}
