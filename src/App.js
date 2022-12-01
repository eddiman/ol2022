import logo from './logo.svg'
import './App.css'
import beerData from './data'

function App() {
  const BeerElement = () => {
    const temp = beerData.map((o, i) => (
      <div className="beer-row">
        <span className="beer-name">{o.name}</span>
        <span className="beer-number">nr.{o.beer}</span>
        <span className="beer-date">{i + 1}. desember</span>
      </div>
    ))

    return <>{temp}</>
  }

  return (
    <div className="App">
      <main>
        <div className="beer-container">
          <h1>🍺 Ølkalendåren 2022 🍺</h1>
          <BeerElement />
        </div>

      </main>
      {
          <div className="snow">
            <div></div>
          </div>
        }
    </div>
  )
}

export default App
