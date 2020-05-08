import React, {Component} from "react";
import '../../../scss/skillList.scss';


function Skills() {

    return (
        <div className="container skills">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <h4 className="display-4">My Skills</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item">Android Frameworks</li>
                        <li className="list-group-item">HTML, CSS, JavaScript</li>
                        <li className="list-group-item">NodeJS, Bootstrap, SASS</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6">
                    <h4 className="display-4">Languages</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> German (native language)</li>
                        <li className="list-group-item"> Englisch</li>
                        <li className="list-group-item">Vietnamese</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;