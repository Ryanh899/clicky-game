import React, { Component } from "react";
import Header from './components/pages/header/header'; 
import Description from './components/pages/body/description/description.jsx'; 
import Card from './components/pages/body/cards/cards.jsx'


class App extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            guess: 'Lets Play', 
            score: 0, 
            topScore: 0, 
            clickedComponent: ''
        }; 
    }
    
    people =  [
        {
            id: 1, 
            picture: 'http://blog.errantsurf.com/wp-content/uploads/Photo-credit-Lucia-Griggi.-Photo-taken-at-CloudbreakFiji.-.jpg'
        },   
        {
            id: 2, 
            picture: 'https://media.newyorker.com/photos/5d5fd4f87ec6dc000826f2fb/master/w_727,c_limit/Brisick-Surfing-Selfie.jpg'
        },
        {
            id: 3, 
            picture: 'https://beachgrit.com/wp-content/uploads/2018/12/English_01-1024x683.jpg'
        },
        {
            id: 4,
            picture: 'http://galaxypro.s3.amazonaws.com/spot-media/142/142-pipeline-surf-hawaii2.jpg'
        },
        {
            id: 5,
            picture: 'https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2019/05/Roger-Sharp-Surf-Photography.jpg'
        },
        {
            id: 6,
            picture: 'https://surfsimply.com/wp-content/uploads/2015/03/02-Noosa-Surf-Guide-Romain-Juchereau.jpg'
        },
        {
            id: 7,
            picture: 'https://surfsimply.com/wp-content/uploads/2017/10/01_Damea_Dorsey_Surf_Simply_Hawaii_Fisheye_fullwidth.jpg'
        },
        {
            id: 8,
            picture: 'https://www.canon.com.au/explore/-/media/0a6fa4c6d1284b8cb9c7f8735e5fe82c.ashx'
        },
        {
            id: 9,
            picture: 'http://blog.topazlabs.com/wp-content/uploads/2014/06/Chris-Burkard-Patagonia.png'
        },
        {
            id: 10,
            picture: 'https://iso.500px.com/wp-content/uploads/2015/05/surf_cover.jpeg'
        },
        {
            id:11,
            picture: 'https://www.adventure-journal.com/wp-content/uploads/2017/07/15046964_1236456856418098_1672109757076340736_n.jpg'
        },
        {
            id: 12,
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojNuUJ9i-MKOE9iJSD61al1woWRwiyAc5pK5uDkwQL4C3MmBV'
        },
        {
            id: 13, 
            picture: 'https://i2.wp.com/www.surfer.com/wp-content/uploads/2019/05/ap-1z4d6uwbw1w11_news.jpg?w=3200&ssl=1'
        },
        {
            id: 14,
            picture: 'https://surfsimply.com/wp-content/uploads/2018/02/Damea_Dorsey_Tai_Graham_Sumbawa_surf_simply_magazine_fullwidth.jpg'
        },
    ];


    cardMap = (arr) => {
        return arr.map(x => 
            <Card id={x.id} name={x.name} image={x.picture} key={arr.indexOf(x)} onClick={(event) => this.cardClick(event)} />
        )
    }; 
    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    };

    cardClick = (event) => {
        this.shuffle(this.people)
        if (event.target.id !== this.state.clickedComponent && this.state.score > this.state.topScore) {
            this.setState({
                clickedComponent: event.target.id, 
                guess: true, 
                score: this.state.score + 1, 
                topScore: this.state.score + 1
            }); 
        } else if (event.target.id !== this.state.clickedComponent && this.state.score < this.state.topScore) {
            this.setState({
                clickedComponent: event.target.id, 
                guess: true, 
                score: this.state.score + 1, 
            }); 
        } else if (event.target.id !== this.state.clickedComponent && this.state.score === this.state.topScore) {
            this.setState({
                clickedComponent: event.target.id, 
                guess: true, 
                score: this.state.score + 1, 
                topScore: this.state.score + 1
            }); 
        } else if (event.target.id === this.state.clickedComponent) {
            this.setState({
                guess: false, 
                score: 0 
            }); 
        } else {
            console.log('blah')
        }
    }

    guessCheck = () => {
        let guess = ''; 
        if (this.state.guess === 'Lets Play') {
            guess = this.state.guess
        } else if (this.state.guess) {
            guess = 'Guessed Correct'
        }
        else if (!this.state.guess) {
            guess = 'Guessed Incorrect, Game Over'
        }
        return guess
    }; 

  render () {
    console.log(this.people.length)
    
    return (
    <div >
        <Header guess={() => this.guessCheck()} score={this.state.score} topScore={this.state.topScore} />
        <Description />
        <div className="container mb-5" >
            <div className="row d-flex" >
                <div className="col-3 p-4" >
                    {this.cardMap(this.people.slice(0, 3))}
                </div>
                <div className="col-3 p-4" >
                    {this.cardMap(this.people.slice(4, 7))}
                </div>
                <div className="col-3 p-4" >
                    {this.cardMap(this.people.slice(8, 11))}
                </div>
                <div className="col-3 p-4" >
                    {this.cardMap(this.people.slice(11, 14))}
                </div>
            </div>
        </div>
    </div>
    
    );
  };
};

export default App;
