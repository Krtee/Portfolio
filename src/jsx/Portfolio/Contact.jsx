import React, {Component} from "react";
import '../../scss/contact.scss';


class Contact extends Component {
    render() {
        return (
            <div className={'container-fluid contact'}>
                <div className={'text-center'}>
                    <h2 className={'display-4'}>Contact Me</h2>
                    <p className={'lead '}>if there is any questions, feel free to contact me!</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Email: minh.vu.nguyen@hotmail.de</li>
                        <li className="list-group-item">Github:</li>
                        <li className="list-group-item">LinkedIn:</li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Contact;