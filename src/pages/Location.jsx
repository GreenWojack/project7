import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Carousel from "../components/img_carousel"
import { useNavigate } from "react-router-dom"
import Tag from "../components/tag"
import logements from "../data/logements.json"
import star_filled from "../assets/star_filled.png"
import star_grey from "../assets/star_grey.png"
import "../style/style.scss"
import Collapse from "../components/collapse"

const Location = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [selectedLogement, setSelectedLogement] = useState(null)
  useEffect(() => {
    getLogement()
  }, [id])

  function getLogement() {
    const foundLogement = logements.find((logement) => logement.id === id)
    if (!foundLogement) {
      navigate("*")
    }
    setSelectedLogement(foundLogement)
  }

  function renderStars(rating) {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img className="rating-star" key={i} src={star_filled} alt="Filled star" />)
      } else {
        stars.push(<img className="rating-star" key={i} src={star_grey} alt="Grey star" />)
      }
    }
    return stars
  }

  return (
    <div className="location-content">
      {selectedLogement && (
        <>
          <div className="location">
            <div className="location-details">
              <Carousel pictures={selectedLogement.pictures} />
              <div className="location-info">
                <div className="title-bloc text-color">
                  <h1 className="location-header">{selectedLogement.title}</h1>
                  <span className="location-position">{selectedLogement.location}</span>
                  <div className="location-tag">
                    {selectedLogement.tags.map((tag, index) => (
                      <Tag key={index} tag={tag} />
                    ))}
                  </div>
                </div>
                <div className="rating-bloc">
                  <div className="host">
                    <span className="host-name text-color">{selectedLogement.host.name}</span>
                    <img className="host-picture" src={selectedLogement.host.picture} alt="profile_picture" />
                  </div>
                  <div className="rating">{renderStars(selectedLogement.rating)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="location-collapse">
            <div className="location-collapse-wrapper">
              <div className="description-collapse">
                <Collapse title="Description" text={selectedLogement.description} />
              </div>
              <div className="equipments-collapse">
                <Collapse title="Équipements" text={selectedLogement.equipments} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Location
