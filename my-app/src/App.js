import './App.css';
import CardCollection from './containers/CardCollection'
import FilterBar from './components/FilterBar.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>National Parks Finder</h1>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71xnLnPhq2L._AC_SL1500_.jpg" alt="map"/>
      </header>

      <FilterBar/>
      <CardCollection/>
    </div>
  );
}

export default App;
