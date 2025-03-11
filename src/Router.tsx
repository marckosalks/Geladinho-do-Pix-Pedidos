import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home/Home"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pedidos" element={<Home/>} />
      </Routes>
    </BrowserRouter>

  )
}
