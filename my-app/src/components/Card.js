import React, {Component} from 'react';

class Card extends React.Component {

    render(){
        return (
        <div className="card"id={/*card id*/}>
            <h2>{/*name of park*/}</h2>
            <img src={/*park photo*/} alt={/*name of park*/}/>
                <button className="like-btn"onClick={/*event*/}>favorite ⭐️ </button>
        </div>
        );
    }

}

export default Card;