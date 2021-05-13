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
        <div className="favoritesArea">
            {card}
        </div>
    );
}

}
export default Favorites