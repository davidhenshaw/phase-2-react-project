import './App.css';
import CardCollection from './containers/CardCollection'
import Favorites from './containers/Favorites'
import FilterBar from './components/FilterBar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import axios from 'axios';


const parksURL = "https://developer.nps.gov/api/v1/parks?api_key=ozWxLqLJdt1ZnyKb5MFZBbugyBUCGdlN0cxJpdmV";
const favoritesURL = "http://localhost:3002/favoriteParks";

class App extends React.Component {

  state = {
    parks: [],
    favorites: [],
    filters: {
      states: 'all'
    },

  }

  selectState = (val) => {
    this.setState({ states: val })
  }

  handleData = (parksData) => {
    this.setState({
      parks: parksData
    })
  }

  handleFavoritesData = (favoritesData) => {
    this.setState({
      favorites: favoritesData
    })
  }

  componentDidMount = () => {
    axios.get(parksURL)
      .then((response) => this.handleData(response.data.data))

    axios.get(favoritesURL)
      .then(response => this.handleFavoritesData(response.data))
  }

  onFindStates = () => {
    let URL = parksURL;

    if (this.state.filters.states !== 'all') {
      URL += `&statecode=${this.state.filters.states}`
    }

    axios.get(URL)
      .then(response => this.setState({parks: response.data.data}))
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, states: value } })
  }

  addFavorite = (favoriteItem) => {
    if (!this.state.favorites.find(alreadyFavorite => favoriteItem === alreadyFavorite))
    {
      axios.post(favoritesURL, favoriteItem )
      .then(() => this.setState({favorites: [...this.state.favorites, favoriteItem] }))
    }    
  }

  removeFromFavorites = (favoriteItem) => {

    axios.delete(favoritesURL + '/' + favoriteItem.id)
      .then( () => 
        this.setState({favorites: this.state.favorites.filter(oldFavorite => oldFavorite !== favoriteItem)})
      )

  }


  render() {

    return (
      <Router>
        <div className="App">
          <nav>
            <span>
              <Link className="nav-link" to="/">Card Collection </Link>
              <Link className="nav-link" to="/Favorites">Favorites</Link>
            </span>
          </nav>

          <div className="App">
            <header className="App-header">
              <h1>National Parks Finder</h1>
              <img className="header-image" src="https://images-na.ssl-images-amazon.com/images/I/71xnLnPhq2L._AC_SL1500_.jpg" alt="map" />
            </header>

            <FilterBar onChangeType={this.onChangeType} onFindStates={this.onFindStates} />

          </div>
          <Switch>
            <Route path="/Favorites">
              <Favorites  removeFromFavorites={this.removeFromFavorites} favoriteData={this.state.favorites} parksData={this.state.parks} />
            </Route>
            <Route path="/">
              <CardCollection addFavorite={this.addFavorite} parksData={this.state.parks} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  };
}

export default App;