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
        <div className="card" key={this.props.park.id}>
            <img className="park-img"src={this.props.park.images[0].url} alt="park"/>
            <a href={this.props.park.url} target="_blank">
                <h2>
                    {this.props.park.fullName}
                </h2>
            </a>
            <h3 className="states">
                {this.props.park.states}
            </h3>
            <span>
                {this.renderActivities()}
            </span>
            <p>
                {this.props.park.description}
            </p>
            <button className="like-btn"onClick={()=>this.props.handleClick(this.props.park)}>Favorite ⭐️ </button>
        </div>
        );
    }
}

export default Card;