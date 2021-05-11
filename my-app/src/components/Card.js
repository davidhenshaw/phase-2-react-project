import React, {Component} from 'react';

class Card extends React.Component {

    render(){
        return (
        <div className="card">
            <h2>{this.props.park.fullName}</h2>
            <img src={this.props.park.images[0].url} alt="park"/>
                <button className="like-btn">favorite ⭐️ </button>
        </div>
        );
    }

}

export default Card;