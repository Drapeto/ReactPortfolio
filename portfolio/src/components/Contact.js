import React from 'react';
import Card from 'react-bootstrap/Card'
import '../../styles/ContactCard.css'



function Contact() {
    return (
        <Card.Body>

            <h1>Veronica Torres</h1>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Getting To Know Me</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio.html#">Portfolio</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Assets/Veronica_Torres_Resume.pdf">Resume</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/veronica-torres-329809195/"><i className="fab fa-linkedin fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/Drapeto"><i className="fab fa-github-square fa-3x"></i></a>
                        </li>
                    </ul>

                </div>
            </nav>
            </div>
        <form className="form-horizontal" action="/action_page.php">
            <div className="form-group">
                <label className="control-label col-sm-2" for="email">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter email">
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" for="name">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="FirstName">
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="name">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="LastName">
                        </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-default">Click Submit</button>
                                    </div>
                                </div>
                </form>


                        </div>
        </Card.Body>

    )
}

export default Contact;
