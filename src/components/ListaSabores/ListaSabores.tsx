import { Link } from "react-router"
import { Images } from "../../assets"
import "./styles.css"

export const sabores = ["Coco", "Morango", "Manga", "Maracuja"]

export function ListaSabores() {
  return (
    <section className="saboresContainer">
      <ul>
        {sabores.map((sabor: string, index) => (
          <li key={sabor}>
            <img src={Images[index]} alt="" className="geladinhos" />
            <Link to="/pedidos">{sabor}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}