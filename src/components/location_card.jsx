import React from "react"
import "../style/style.scss"

function Card({ logement, onClick }) {
  const { id, title, cover } = logement

  return (
    <div className="card" onClick={() => onClick(id)}>
      <img className="card-cover" src={cover} alt="" />
      <span className="card-title">{title}</span>
    </div>
  )
}

export default Card
