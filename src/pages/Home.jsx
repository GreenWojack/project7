import React from "react"
import Banner from "../components/banner"
import Card from "../components/location_card"
import logements from "../data/logements.json"
import { useNavigate } from "react-router-dom"
import "../style/home.scss"

function Home() {
  const navigate = useNavigate()

  function handleClick(id) {
    navigate(`/location/${id}`)
  }

  return (
    <div className="App">
      <Banner className="banner" />
      <div className="card-container">
        {logements.map((logement) => (
          <Card onClick={() => handleClick(logement.id)} className="card" key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  )
}

export default Home
