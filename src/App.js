import logo from './logo.svg'
import './App.css'
import beerData from './data'

import DankelImg from './images/dankel.jpeg'
import EdvardImg from './images/edvard.jpeg'
import KimImg from './images/kim.jpeg'
import TveitImg from './images/tveit.jpeg'
import ViljarImg from './images/viljar.jpeg'

function App() {
  const BeerElement = () => {
    const temp = beerData.map((o, i) => (
      <div className="beer-row">
        <span className="beer-name header-primary">{o.name}</span>
        <span className="beer-number">{o.beer}</span>
        <span className="beer-date">{i + 1}. desember</span>
      </div>
    ))

    return <>{temp}</>
  }

  const ImageElement = (props) => {

    return (
      <div className="beer-owner">
        <img src={props.imgUrl} alt={props.name} />
        <span>{props.name}</span>
      </div>
    )
  }

  return (
    <div className="App">
      <main>
        <div className="beer-container">
          <h1>🍺 Ølkalendåren 2022 🍺</h1>
          <a href="https://bfktinius.zoom.us/j/9306733551" target={"_blank"}>Zoom-link</a>

          <BeerElement />
        </div>

        <div className="beer-owner-container">
          <ImageElement imgUrl={DankelImg} name="Dankel" />
          <ImageElement imgUrl={EdvardImg} name="Edvard" />
          <ImageElement imgUrl={KimImg} name="Kim" />
          <ImageElement imgUrl={TveitImg} name="Øyvind" />
          <ImageElement imgUrl={ViljarImg} name="Viljar" />
        </div>
      </main>
      {/*
        <div className="snow">
          <div></div>
        </div>*/}
    </div>
  )
}

export default App
