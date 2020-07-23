import React from 'react';
import '../../styles/AboutCard.css'
import Pic from '../../utils/images/Pic.jpg'
import Card from 'react-bootstrap/Card'


function AboutCard() {
    return (
            <Card className="aboutMe">
                    <Card.Body className="card-body">
                        <h3 className="aboutHeader">About Me</h3>
                        <h4 className="name">Veronica Torres</h4>
                        <img className="proimage" src={Pic} alt="Pic" />
                        <section className="text">
                            My professional career began in selling and marketing business application solutions for small to enterprise wide companies.
                            As a marketer clients preferred speaking with me rather than my sales agent because I could explain the technology better.
                            I have always had a crush on computer technology. I have my Associates in Science for Computer Technology, held a Systems
                            Testing and Analysis position and am now determined to become a full stack developer. With this knowledge I hope to not only
                            help businesses design functional user-friendly applications but also I hope to inspire my younger family members to pursue 
                            web development as a career.
                        </section>
                    </Card.Body >
                </Card>
            )
        };

    
    export default AboutCard;