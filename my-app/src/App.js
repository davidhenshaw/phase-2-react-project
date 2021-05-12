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

handleData = (parksData) => {
  this.setState({
    parks:parksData
  })
}
// findStateParks = () =>{
// let URL = "http://localhost:3001/data";

// if (this.state.filters.states !='all'){
//   URL += `?type=${this.state.filters.states}` 
// }


componentDidMount = () => {
  let URL = "http://localhost:3001/data";

  if (this.state.filters.states !='all'){
    URL += `?states=${this.state.filters.states}` 
  } 
axios.get('http://localhost:3001/data')
.then((response)=> this.handleData(response.data))
console.log(this.state.filters.states)
}

onChangeType = ({target:{value}}) => {
  this.setState({filters:{...this.state.filters, states:value}})
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

          <FilterBar onChangeType={this.onChangeType} onStateSelected={this.componentDidMount}/>
          
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
