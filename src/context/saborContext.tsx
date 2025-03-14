import {createContext, ReactNode, useContext, useState} from "react"

type SaborContextType = {
  sabor: string;
  setSabor: (sabor: string) => void
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
    <SaborContext.Provider value={{sabor, setSabor}}>
      {children}
    </SaborContext.Provider>
  )
}
