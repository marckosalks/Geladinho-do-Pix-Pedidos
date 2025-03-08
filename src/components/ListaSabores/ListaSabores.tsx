import { Images } from "../../assets"
import "./styles.css"

export function SaborLista(){
  const sabores = ["Coco", "Morango", "Manga", "Maracuja"]

  return(
    <section className="saboresContainer">
        <ul>
        {sabores.map((sabor: string, index ) => (
           <li key={sabor}>
            <img src={Images[index]} alt="" className="geladinhos"/>
            <a href="" >{sabor}</a>
            </li>
        ))}
        </ul>
        </section>
  )
}