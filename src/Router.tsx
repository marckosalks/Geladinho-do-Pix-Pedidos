import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home/Home"

import Pedidos from "./pages/Pedidos/Pedidos"

export default function Router() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>

  )
}
