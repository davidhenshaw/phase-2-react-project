import './App.css';
import CardCollection from './containers/CardCollection'
import FilterBar from './components/FilterBar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import axios from 'axios';


class App extends React.Component{

  state ={
    parks: [],
    filters:{
      states: 'all'
    }
  }
  
  selectState =(val) =>{
    this.setState({states:val})
  }

  handleData = (parksData) => {
    this.setState({
      parks:parksData
    })
  }
  
  componentDidMount = () => {
  axios.get("http://localhost:3001/data")
  .then((response)=> this.handleData(response.data))
  
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filter: { type: value } })
  }

  onFindStates =() =>{
  let URL = "http://localhost:3001/data";

  if (this.state.filters.states !=='all'){
    URL += `?states=${this.state.filters.states}` 
  } 
  fetch(URL)
  .then(res => res.json())
  .then(filteredStates => this.setState({ states: filteredStates }))
}
    render(){
      
      return(
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Card Collection </Link>
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
  
            <FilterBar onChangeType={this.onChangeType} onFindStates= {this.onFindStates}/>
            
          </div>
          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/">
            <CardCollection parksData={this.state.parks}/>
            </Route>
          </Switch>
        </div>
      </Router>
      )
    };
  }
  function Favorites() {
    return <h2>Favorites</h2>;
  }
  export default App;