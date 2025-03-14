import { useState } from "react"
import "./styles.css"
import { useSabor } from "../../context/saborContext";
// import { Images } from "../../assets"

export default function Pedidos() {
    const [quantidade, setQuantidade ] =  useState(0);
    const { sabor } = useSabor()

  console.log(sabor)
  return (

    // basicamente aqui vai conter uma logica pra se o sabor retornado 
    // for igual determinado sabor, exibir as informações de acordo com esse sabor

    <div className="containerPedidos">
      <h3>{}</h3>
      
      <div className="cardFlavor">
      {/* <img src={} alt="" /> */}
      <p>{}</p>
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
