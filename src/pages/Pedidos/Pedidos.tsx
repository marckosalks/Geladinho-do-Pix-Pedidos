import { useState } from "react"
// import { sabores } from "../../components/ListaSabores/ListaSabores"
import "./styles.css"


type PedidosType ={
  titulo: string,
  imagem: string,
  descricao: string,
}

export default function Pedidos({titulo, imagem, descricao}: PedidosType) {
  const [quantidade, setQuantidade ] =  useState(0)

  return (
    <div className="containerPedidos">
      <h3>{titulo}</h3>
      
      <div className="cardFlavor">
      <img src={imagem} alt="" />
      <p>{descricao}</p>
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
