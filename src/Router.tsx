import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home/Home"
import Pedidos from "./pages/Pedidos/Pedidos"
import { ConfirmarPedido } from "./pages/ConfirmarPedido/ConfirmarPedido"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pedidos" element={<Pedidos/>} />
        <Route path="/confirmar" element={<ConfirmarPedido/>} />
      </Routes>
    </BrowserRouter>

  )
}
