import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import "../style/style.scss"

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
          <Link className="navLink text-color" to="/">
            Accueil
          </Link>
          <Link className="navLink text-color" to="/about">
            A Propos
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
