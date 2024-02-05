import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Carousel from "../components/img_carousel"
import logements from "../data/logements.json"
import "../style/location.scss"

const Location = () => {
  const { id } = useParams()
  const [selectedLogement, setSelectedLogement] = useState(null) // State to hold the selected logement

  useEffect(() => {
    // Use useEffect to call getLogement when component mounts or id changes
    getLogement()
  })

  function getLogement() {
    const foundLogement = logements.find((logement) => logement.id === id)
    setSelectedLogement(foundLogement)
  }

  return (
    <div className="location">
      {selectedLogement && ( // Render the card content only when selectedLogement is not null
        <>
          <div className="location-details">
            <Carousel pictures={selectedLogement.pictures} />
            <h1>{selectedLogement.title}</h1>
          </div>
        </>
      )}
    </div>
  )
}

export default Location
