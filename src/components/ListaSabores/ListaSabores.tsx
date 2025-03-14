import { Link } from "react-router"
import "./styles.css"
import { useSabor } from "../../context/saborContext"

export const sabores = ["Coco", "Morango", "Manga", "Maracuja", "Paçoca", "Goiaba", "Chocolate", "Uva"]

export function ListaSabores() {
  const { setSabor } = useSabor()

  return (
    <section className="saboresContainer">
      <ul>
        {sabores.map((sabor: string) => (
          <li key={sabor}>
            <Link to="/pedidos" onClick={ ()=> setSabor(sabor) }>{sabor}</Link>
          </li>
          
        ))}
      </ul>
    </section>
  )
}