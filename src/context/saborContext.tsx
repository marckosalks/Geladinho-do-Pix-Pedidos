import {createContext, ReactNode, useContext, useState} from "react"

import { itensPedido, itensPedidoType } from "../mocks/itensPedidos";

type SaborContextType = {
  sabor: string;
  setSabor: (sabor: string) => void;
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
  return(
    <SaborContext.Provider value={{sabor, setSabor, itensPedido}}>
      {children}
    </SaborContext.Provider>
  )
}
