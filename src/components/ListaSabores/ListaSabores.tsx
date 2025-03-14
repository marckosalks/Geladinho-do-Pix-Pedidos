import { Link } from "react-router"
import "./styles.css"
// import { useState } from "react"

export const sabores = ["Coco", "Morango", "Manga", "Maracuja", "Paçoca", "Goiaba", "Chocolate", "Uva"]
// const [escolhaSabor, setEscolhaSabor] = useState("")
export function ListaSabores() {
  return (
    <section className="saboresContainer">
      <ul>
        {sabores.map((sabor: string) => (
          <li key={sabor}>
            
            {/* {setEscolhaSabor(sabor)} */}
            <Link to="/pedidos">{sabor}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}