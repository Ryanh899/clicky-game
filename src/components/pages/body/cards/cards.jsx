import React, { Component } from "react";
import './card.css'

class Card extends Component {
    // constructor(props) {
    //     super(props) 
    //     this.state = {
            
    //     }; 
    // }

  render () {
    return (
    <div className="card mt-3"  key={this.key} style={{minHeight: '35%', maxHeight: '35%', height: '35%'}} >
        <img id={this.props.id} src={this.props.image} className="card-img-top cardImage border bg-light rounded p-2" alt="Surfing" onClick={this.props.onClick}  />
    </div>
    );
  };
};

export default Card;
