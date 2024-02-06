import banner_homepage from "../assets/banner_homepage.png"
import banner_about from "../assets/banner_about.jpeg"
import "../style/style.scss"

function Banner({ page }) {
  function imageSelector() {
    if (page === "homepage") {
      return banner_homepage
    } else return banner_about
  }
  return (
    <div className="banner-container">
      <img className="banner" src={imageSelector()} alt="banner" />
      {page === "homepage" && <span className="banner-text">Chez vous, partout et ailleurs</span>}
    </div>
  )
}

export default Banner
