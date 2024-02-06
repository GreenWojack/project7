import "../style/style.scss"
import { Link } from "react-router-dom"
function Error() {
  return (
    <div className="error text-color">
      <h1 className="error-number">404</h1>
      <h2 className="error-message">Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="homepage text-color" to="/">
        <h3 className="error-home">Retourner sur la page d’accueil</h3>
      </Link>
    </div>
  )
}

export default Error
