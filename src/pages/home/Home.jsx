import Banner from "../../components/banner";
import Card from '../../components/location_card';
import logements from '../../data/logements.json';
import "../../style/home.scss";

function Home() {
  return (
    <div className="App">
      <Banner className="banner" />
      <div className="card-container">
        {logements.map((logement) => (
          <Card className="card" key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;