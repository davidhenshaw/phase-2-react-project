import React, {Component} from 'react';

class Card extends React.Component {

    renderActivities = () => 
    {
        return this.props.park.activities.map( (activity) => {
            <li>{activity.name}</li>
        })
    }


    render(){
        return (
        <div className="card">
            <img className="park-img"src={this.props.park.images[0].url} alt="park"/>
            <h2>{this.props.park.fullName}</h2>
            <h3>{this.props.park.states}</h3>
            <span>{this.renderActivities()}</span>
            <p>{this.props.park.description}</p>
            <button className="like-btn">favorite ⭐️ </button>
        </div>
        );
    }

}

export default Card;