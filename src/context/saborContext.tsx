import { createContext, ReactNode, useContext, useState } from "react";
import { itensPedido, itensPedidoType } from "../mocks/itensPedidos";

type PedidoType = {
  sabor: string;
  preco: number;
  quantidade: number;
};

type SaborContextType = {
  sabor: string;
  preco: number;
  quantidade: number;
  pedidos: PedidoType[]; // 🔹 Adicionamos um array de pedidos
  setSabor: (sabor: string) => void;
  setPreco: (preco: number) => void;
  setQuantidade: (quantidade: number) => void;
  adicionarPedido: (pedido: PedidoType) => void; // 🔹 Função para adicionar pedidos
  itensPedido: itensPedidoType[];
};

const SaborContext = createContext<SaborContextType | undefined>(undefined);

export function useSabor() {
  const context = useContext(SaborContext);
  if (!context) {
    throw new Error("useSabor deve ser usado dentro de um SaborProvider");
  }
  return context;
}

export function SaborProvider({ children }: { children: ReactNode }) {
  const [sabor, setSabor] = useState("");
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [pedidos, setPedidos] = useState<PedidoType[]>([]); // Estado para armazenar pedidos

  function adicionarPedido(novoPedido: PedidoType) {
    setPedidos((prevPedidos) => [...prevPedidos, novoPedido]); // Adiciona o novo pedido à lista
  }

  return (
    <SaborContext.Provider
      value={{
        sabor,
        preco,
        quantidade,
        setSabor,
        setPreco,
        setQuantidade,
        adicionarPedido,
        pedidos, 
        itensPedido,
      }}
    >
      {children}
    </SaborContext.Provider>
  );
}
