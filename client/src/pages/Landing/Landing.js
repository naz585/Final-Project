import React, {Component} from 'react';
import "./Landing.css"
class Landing extends Component {
    constructor (props) {
        super(props);

        this.state = {
        }
    }

    render () {
        return (
            <div className="container-fluid first">

            <div className="bg-L text-center mx-auto align-text-middle">
            <div className="Spacer"></div>
            <h1>Are you over 18</h1>
            <br/>
            <h1><a href="/home">Yes</a> <a href="/">No</a></h1>
            </div>
            

            </div>
        )
    }
};

export default Landing;