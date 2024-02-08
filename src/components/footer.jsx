import "../style/style.scss"
import logo from "../assets/logo-white.png"

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
