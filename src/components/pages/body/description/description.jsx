import React, { Component } from 'react' ; 
import './description.css'; 


class Description extends Component {
    render () {
        return (
            <div style={{position: 'relative', width: '100%'}} className="bg container-fluid"  >
                <div style={{position: 'relative', width: '100%', maxWidth: '100%'}} className="row d-flex justify-content-center">
                    <div style={{position: 'relative'}} className="col-6 bg-white text-center rounded mt-3 mb-3 " >
                            <h1 style={{fontFamily: 'Big Shoulders Display', fontSize: '75px', position: 'relative'}} className="font-weight-bold" >Click On A Surfer To Start</h1>
                            <p style={{position: 'relative'}} className="instructionText" >Don't click on the same surfer twice</p>
                    </div>
                </div>
            </div>        
        ); 
    }; 
}; 




export default Description ; 