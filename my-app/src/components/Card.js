import React, {Component} from 'react';

class Card extends React.Component {

    render(){
        return (
        <div className="card">
            <h2>"name of park"</h2>
            <img src="" alt="park"/>
                <button className="like-btn">favorite ⭐️ </button>
        </div>
        );
    }

}

export default Card;