import {createContext, ReactNode, useContext, useState} from "react"

import { itensPedido, itensPedidoType } from "../mocks/itensPedidos";

type SaborContextType = {
  sabor: string;
  preco: number;
  quantidade: number
  setSabor: (sabor: string) => void;
  setPreco: (preco: number) => void;
  setQuantidade: (quantidade: number) => void;
  itensPedido: itensPedidoType[];
}


const SaborContext = createContext<SaborContextType | undefined>(undefined)

export function useSabor() {
  const context = useContext(SaborContext);
  if(!context){
    throw new Error("useSabor deve ser usado dentro de um SaborProvider");
  }
 
  return context
}

export function SaborProvider({children}: {children: ReactNode}){
  const [sabor, setSabor] = useState("");
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  return(
    <SaborContext.Provider value={{sabor, preco, quantidade,  setSabor,  itensPedido, setPreco, setQuantidade}}>
      {children}
    </SaborContext.Provider>
  )
}
