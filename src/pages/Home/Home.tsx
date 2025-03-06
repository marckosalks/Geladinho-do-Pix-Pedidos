import { SaborLista } from "../../components/ListaSabores/ListaSabores"
import Geladissimo from "../../assets/geladissimo.png"
import Ilha from "../../assets/ilha.png"
import "./styles.css"

export function Home() {  
  return (
    <div className="homeComponent">
      <div>
        <h1>Bem-vindo ao Geladinho do Pix Pedidos</h1>
        <img src={Geladissimo} alt="" className="geladissimo" />
        <img src={Ilha} alt="" className="ilha"/>
        <p>Aqui voce encontra refresco pro seu calor</p>
        <SaborLista/>
     
      </div>
    </div>
  )
}