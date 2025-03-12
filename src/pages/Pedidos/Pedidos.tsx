import { sabores } from "../../components/ListaSabores/ListaSabores"
import "./styles.css"

export default function Pedidos() {


  return (
    <div className="containerPedidos">
      <h3>Faça seu pedido aqui!</h3>
      <form>
        {sabores.map((sabor: string) => (
          <div>
            <input type="checkbox" />
            <input type="number" />
            <span>{sabor}</span>
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
