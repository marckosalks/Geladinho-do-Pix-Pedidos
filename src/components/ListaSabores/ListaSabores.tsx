import { Link } from "react-router"
import "./styles.css"

export const sabores = ["Coco", "Morango", "Manga", "Maracuja", "Paçoca", "Goiaba", "Chocolate", "Uva"]

export function ListaSabores() {
  return (
    <section className="saboresContainer">
      <ul>
        {sabores.map((sabor: string) => (
          <li key={sabor}>
            <Link to="/pedidos">{sabor}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}