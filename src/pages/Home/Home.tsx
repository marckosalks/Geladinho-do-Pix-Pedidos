import { useEffect, useState } from "react"

import Geladissimo from "../../assets/geladissimo.png"

import { ListaSabores } from "../../components/ListaSabores/ListaSabores"

import "./styles.css"
import { BannerPromocao } from "../../components/bannerPromocao/bannerPromocao"


export function Home() {
  const frases = [
    "Promoção comprando 2 geladinhos, a unidade sai a R$ 2,50!!",
    "Muito bom ter você aqui, fique a vontade!"
  ]

  const [fraseBanner, setFraseBanner] = useState(frases[0])

  useEffect(()=> {
    let indice = 0;
    
    setInterval(()=>{
      indice = (indice + 1) % frases.length
      setFraseBanner(frases[indice])   
    }, 5000)
  },[])

  return (

    <div className="homeComponent">
      <div className="container">
        <h1>Geladinho do Pix</h1>
        <img src={Geladissimo} alt="" className="geladissimo" />
        <p>Aqui voce encontra refresco pro seu calor</p>
        <ListaSabores />
      </div>
      <BannerPromocao titulo={fraseBanner} />
    </div>
  )
}