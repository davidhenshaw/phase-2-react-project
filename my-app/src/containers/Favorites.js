import React from 'react';
import Card from '../components/Card.js';

class Favorites extends React.Component {

render(){
    let card = this.props.favoriteData.map(park => {
        return <Card 
        handleClick ={this.props.removeFromFavorites}
        park = {park}
        key ={park.id}
        favoriteId ={park.id}
        
        />
    })
    
    return (
        <div className="card-collection">
            {
                this.props.favoriteData.length > 0 
                ?
                card
                :
                <h2>Your favorites list appears to be empty!</h2>
            }
        </div>
    );
}

}
export default Favorites