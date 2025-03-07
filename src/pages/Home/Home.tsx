import { SaborLista } from "../../components/ListaSabores/ListaSabores"
import Geladissimo from "../../assets/geladissimo.png"
import "./styles.css"

export function Home() {  
  return (
    <div className="homeComponent">
      <div>
        <h1>Bem-vindo ao Geladinho do Pix Pedidos</h1>
        <img src={Geladissimo} alt="" className="geladissimo" />
        <p>Aqui voce encontra refresco pro seu calor</p>
        <SaborLista/>
     
      </div>
    </div>
  )
}