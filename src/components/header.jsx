import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import "../style/header.scss"

function Header() {
  return (
    <nav>
      <div className="navigation">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav">
          <Link className="navLink" to="/">
            Accueil
          </Link>
          <Link className="navLink" to="/about">
            A Propos
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
