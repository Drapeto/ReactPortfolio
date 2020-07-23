import React from 'react';
import '../../styles/PortfolioCard.css'
import Card from 'react-bootstrap/Card'
import MadLibz from '../../utils/images/MadLibz.JPG'
import WeatherOrNot from '../../utils/images/WeatherorNot.png'
import CodeQuiz from '../../utils/images/CodeQuiz.png'
import TeamGenerator from '../../utils/images/TeamGenerator.png'
import READMEDemo from '../../utils/images/Demo.gif.gif'
import EatDaBurger from '../../utils/images/EatDaBurger.png'
import LeadAstray from '../../utils/images/LeadAstray.png'
import BudgetTracker from '../../utils/images/BudgetTracker.png'
import GoogleBooksSearch from '../../utils/images/GoogleBooksSearch.png'
import Spiral from '../../utils/images/Spiral.png'



function Portfolio() {
    return (
        <Card.Body className="card-body">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                    <div className="card">
                        <a href="https://alexgfotos.github.io/MadGifz/"><img src="utils\Images\MadLibz.JPG" className="card-img-top" alt="MadLibz Game"></img></a>
                        <div class="card-body">
                            <h5 class="card-title">MadGifz Group Project</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col mb-4">
                <div className="card">
                    <a href="https://drapeto.github.io/Random-Password/">
                        <img src="Assets\Images\Random Password.JPG" className="card-img-top" alt="Random-Password"></img></a>
                    <div className="card-body">
                        <h5 className="card-title">Random Password Generator</h5>
                    </div>
                </div>
            </div>

            <div className="col mb-4">
                <div className="card">
                    <a href="https://drapeto.github.io/nina/">
                        <img src="Assets\Images\nina.jpg" className="card-img-top" alt="Nina"></img></a>
                    <div className="card-body">
                        <h5 className="card-title">Fan Page-Nina Simone</h5>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <a href="https://the-bestimator.herokuapp.com/">
                        <img src="Assets\Images\Bestimator.JPG" class="card-img-top" alt="Bestimator"></img></a>
                    <div className="card-body">
                        <h5 className="card-title">Bestimator Group Project 2</h5>
                    </div>
                </div>
            </div>

            <div className="col mb-4">
                <div className="card">
                    <a href="https://github.com/lvarnum/Spiral" >
                        <img src={Spiral}></img></a>
                    <div className="card-body">
                        <h5 className="card-title">Spiral</h5>
                    </div>
                </div>
            </div>
        </Card.Body >
    )
};


export default Portfolio;