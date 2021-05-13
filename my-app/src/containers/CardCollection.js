import React from 'react';
import Card from '../components/Card.js';

class CardCollection extends React.Component {

    render(){
        let card = this.props.parksData.map(park => (
            <Card
            park={park}
            key={park.id}
            handleClick={this.props.addFavorite}
            
            />
        ))
        return <div className="card-collection">
            {card}
            </div>
    }

}

export default CardCollection;