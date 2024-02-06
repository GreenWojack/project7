import "../style/style.scss"
import { useState, useCallback } from "react"

function Collapse({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleIsExpanded = useCallback(() => {
    setIsExpanded((isExpanded) => !isExpanded)
  }, [])
  return (
    <div className="collapse-button">
      <button onClick={toggleIsExpanded} type="button" className="collapsible">
        {title}
      </button>
      <div className="collapse text-color" style={{ height: isExpanded ? "300px" : "0px" }}>
        <p className="collapse-text">{text}</p>
      </div>
    </div>
  )
}

export default Collapse
