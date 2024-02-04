import React from "react"
import { useParams } from "react-router-dom"
import "../style/location.scss"

const Card = ({ logement }) => {
  const { id } = useParams()

  return (
    <div className="card">
      <h2>{id}</h2>
      <div className="test">test</div>
    </div>
  )
}

export default Card
