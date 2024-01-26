import banner from "../assets/banner.png";
import "../style/banner.scss";

function Banner() {
    return (
        <div className="banner-container">
            <img className='banner' src={banner} alt="banner"/>
            <span className="banner-text">Chez vous, partout et ailleurs</span>
        </div>
    );
}

export default Banner;