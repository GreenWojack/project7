import React, { useState } from "react"
import "../style/img-carousel.scss"
import arrow_left from "../assets/arrow_left.png"
import arrow_right from "../assets/arrow_right.png"

function Carousel({ pictures }) {
  const [currentImage, setCurrentImage] = useState(0)

  function handleClick(direction) {
    setCurrentImage((prevIndex) => {
      if (direction === "prev") {
        return (prevIndex - 1 + pictures.length) % pictures.length
      } else {
        return (prevIndex + 1) % pictures.length
      }
    })
  }

  return (
    <div className="carousel">
      <div className="carousel-container">
        <img src={arrow_left} alt="Previous" className="arrow arrow_left" onClick={() => handleClick("prev")} />
        <img src={pictures[currentImage]} alt="" className="carousel-img" onClick={handleClick} />
        <img src={arrow_right} alt="Next" className="arrow arrow_right" onClick={() => handleClick("next")} />
      </div>
    </div>
  )
}

export default Carousel
