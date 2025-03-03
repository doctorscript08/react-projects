import { useState } from "react"
import "./menu.css"

function Menu() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <header className="cabecalho">
        <div>
          <h1>Logo</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Ajuda</a></li>
            <li><a href="#">Terminar Sessão</a></li>
          </ul>
          <button className="open btn" onClick={() => setisOpen(!isOpen)}><i className="fa-solid fa-bars-staggered"></i></button>
        </div>
      </header>
      <nav className={`nav-bar ${isOpen ? "open" : ""}`}>
        <button className="close btn" onClick={() => setisOpen(!isOpen)}><i className="fa-solid fa-xmark"></i></button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Terminar Sessão</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Menu