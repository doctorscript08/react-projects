import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contacto from "./pages/Contacto"

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Sobre" element={<Sobre />}></Route>
        <Route path="/Contacto" element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
  </>
)}

export default App