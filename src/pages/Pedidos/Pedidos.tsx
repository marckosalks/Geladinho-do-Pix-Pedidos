import { useState } from "react"
import {  useSabor } from "../../context/saborContext";

import "./styles.css"

export default function Pedidos() {
    const [quantidade, setQuantidade ] =  useState(0);
    const {itensPedido} = useSabor()
    const { sabor } = useSabor()
    console.log(itensPedido)

    const novoArray = itensPedido.filter(item => sabor === item.titulo)
    
    const pedido = {
      titulo: novoArray[0].titulo,
      descricao: novoArray[0].descricao,
      imagem: novoArray[0].imagem
    }

  return (

    <div className="containerPedidos">
      <h3>{pedido.titulo}</h3>
      
      <div className="cardSabor">
      <img src={pedido.imagem} alt="" />
      <p>{pedido.descricao}</p>
      </div>
      
      <div>
        <button onClick={()=> setQuantidade(quantidade + 1)}>+</button>
        <span>{quantidade}</span>
        <button onClick={()=> setQuantidade(quantidade - 1)}>-</button>
      </div>

      <div>
        Adicionar R${quantidade * 2.5}
      </div>
    </div>
  )
}
