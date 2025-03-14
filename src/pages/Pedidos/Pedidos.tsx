import { useState } from "react"
// import { sabores } from "../../components/ListaSabores/ListaSabores"
import "./styles.css"
// import { Images } from "../../assets"

type PedidosType ={
  titulo: string,
  imagem: string,
  descricao: string,
}




export default function Pedidos({titulo, imagem, descricao}: PedidosType) {
  const [quantidade, setQuantidade ] =  useState(0)

  return (

    // basicamente aqui vai conter uma logica pra se o sabor retornado 
    // for igual determinado sabor, exibir as informações de acordo com esse sabor
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
