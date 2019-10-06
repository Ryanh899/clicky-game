import React, { Component } from 'react' ; 
// import { BrowserRouter as Router, Switch, Route, a } from "react-router-dom";
import './header.css'; 


class Header extends Component {
    render () {
        return (
            <div className="bg-dark"  >
                <div className="row d-flex justify-content-between">
                    <div className="col-3 ml-5 pt-3">
                        <p className="headerText" >Clicky Game</p>
                    </div>
                    <div className="col-3 ml-5 pt-3">
                        <p className="headerText" >Score: {this.props.score} | Top Score: {this.props.topScore}</p>
                    </div>
                    <div className="col-3 ml-5 pt-3">
                        <p className="headerText" >{this.props.guess()}</p>
                    </div>
                </div>
            </div>
        ); 
    }; 
}; 




export default Header ; 