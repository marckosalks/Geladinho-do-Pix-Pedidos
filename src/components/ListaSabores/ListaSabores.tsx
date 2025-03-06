import { Images } from "../../assets"
import "./styles.css"

export function SaborLista(){
  const sabores: string[] =  ["Coco", "Morango", "Manga", "Maracuja"]

  return(
    <section className="saboresContainer">
        <ul>
        {sabores.map((sabor: string, index ) => (
           <li key={index}>
            <img src={Images[index]} alt="" />
            {sabor}
            </li>
        ))}
        </ul>
        </section>
  )
}