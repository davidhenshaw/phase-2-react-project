import './App.css';
import CardCollection from './containers/CardCollection'
import FilterBar from './components/FilterBar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>

        <div className="App">
          <header className="App-header">
            <h1>National Parks Finder</h1>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71xnLnPhq2L._AC_SL1500_.jpg" alt="map" />
          </header>

          <FilterBar />
          <CardCollection />
        </div>
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>






  );
}

export default App;
