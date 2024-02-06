import Banner from "../components/banner"
import Collapse from "../components/collapse"
import about from "../data/about.json"

function About() {
  return (
    <div className="App">
      <Banner page="about" />
      <div className="about-collapse-container">
        <div className="about-collapse-wrapper">
          {about.map((paragraphe, index) => (
            <Collapse className="about-collapse" key={index} title={paragraphe.title} text={paragraphe.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
