import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import "../style/style.scss"

function Header() {
  return (
    <nav>
      <div className="navigation">
        <div className="logo">
          <NavLink to="/">
            <img className="nav-logo" src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="nav">
          <NavLink className="navLink text-color" to="/">
            Accueil
          </NavLink>
          <NavLink className="navLink text-color" to="/about">
            A Propos
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header
