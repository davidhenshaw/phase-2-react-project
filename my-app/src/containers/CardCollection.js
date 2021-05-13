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
            {
                this.props.parksData.length > 0 
                ?
                card
                :
                <h2>Sorry, we couldn't find any national parks based on your search :(</h2>
            }
            </div>
    }

}

export default CardCollection;