import "../style/error.scss";
import { Link } from 'react-router-dom'
function Error() {
    return (
        <div className="error">
            <h1 className="error-number">404</h1>
            <h2 className="error-message">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="homepage" to="/">
                <h3 className="error-home">Retourner sur la page d’accueil</h3>
            </Link>
        </div>
    )
}
 
export default Error