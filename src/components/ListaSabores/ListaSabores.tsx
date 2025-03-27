import { Link } from "react-router"
import "./styles.css"
import { useSabor } from "../../context/saborContext"

export const sabores = ["Coco", "Morango", "Manga", "Maracuja", "Paçoca", "Goiaba", "Chocolate", "Uva"] as const

type Sabor = typeof sabores[number]

const coresSabores: Record<Sabor, string> = {
  Coco: "#8B4513", // Marrom
  Morango: "#FF69B4", // Rosa
  Manga: "#FFA500", // Laranja
  Maracuja: "#FFD700", // Amarelo
  Paçoca: "#8B4513", // Marrom
  Goiaba: "#FF69B4", // Rosa
  Chocolate: "#4A2F1C", // Marrom escuro
  Uva: "#800080" // Roxo
}

export function ListaSabores() {
  const { setSabor } = useSabor()

  return (
    <section className="saboresContainer">
      <ul>
        {sabores.map((sabor: Sabor) => (
          <li key={sabor} style={{ "--cor-sabor": coresSabores[sabor] } as React.CSSProperties}>
            <Link to="/pedidos" onClick={ ()=> setSabor(sabor) }>{sabor}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}