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
    axios.get("http://localhost:3001/data")
      .then((response) => this.handleData(response.data))

    axios.get("http://localhost:3002/favoriteParks")
      .then(response => this.handleFavoritesData(response.data))
  }

  onFindStates = () => {
    let URL = "http://localhost:3001/data";

    if (this.state.filters.states !== 'all') {
      URL += `?states=${this.state.filters.states}`
    }

    axios.get(URL)
      .then(filteredStates => this.setState({parks: filteredStates}))
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, states: value } })
  }

  addFavorite = (favoriteItem) => {
    if (!this.state.favorites.find(alreadyFavorite => favoriteItem === alreadyFavorite))
    {
      axios.post("http://localhost:3002/favoriteParks", favoriteItem )
      .then(() => this.setState({favorites: [...this.state.favorites, favoriteItem] }))
    }    
  }

  removeFromFavorites = (favoriteItem) => {

    axios.delete("http://localhost:3002/favoriteParks/" + favoriteItem.id)
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