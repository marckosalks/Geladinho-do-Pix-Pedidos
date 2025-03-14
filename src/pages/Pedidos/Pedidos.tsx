import { useState } from "react"
import {  useSabor } from "../../context/saborContext";
// import { Images } from "../../assets"


import "./styles.css"

export default function Pedidos() {
    const [quantidade, setQuantidade ] =  useState(0);
    const {itensPedido} = useSabor()
    const { sabor } = useSabor()

  console.log(sabor)
  return (

    // basicamente aqui vai conter uma logica pra se o sabor retornado 
    // for igual determinado sabor, exibir as informações de acordo com esse sabor

    <div className="containerPedidos">
      <h3>{sabor}</h3>
      
      <div className="cardSabor">
      <img src={itensPedido[0].imagem} alt="" />
      <p>{itensPedido[0].descricao}</p>
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
