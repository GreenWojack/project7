import "../style/style.scss"
import { useState, useCallback } from "react"

function Collapse({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleIsExpanded = useCallback(() => {
    setIsExpanded((isExpanded) => !isExpanded)
  }, [])

  const renderTextContent = () => {
    if (title === "Équipements") {
      return (
        <ul>
          {text.map((item, index) => (
            <li className="collapse-text" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )
    } else {
      return <p className="collapse-text">{text}</p>
    }
  }
  function collapseHeight() {
    if (title === "Équipements" || title === "Description") {
      return { height: isExpanded ? "300px" : "0px" }
    } else return { height: isExpanded ? "auto" : "0px" }
  }

  return (
    <div className="collapse-button">
      <button onClick={toggleIsExpanded} type="button" className={`collapsible ${isExpanded ? "collapsible-test" : "collapsible-test1"}`}>
        {title}
      </button>
      <div className="collapse text-color" style={collapseHeight()}>
        {renderTextContent()}
      </div>
    </div>
  )
}

export default Collapse
