import React from 'react';
import ReactDOM from 'react-dom';

import X from './X.png';
import O from './O.png';
import {Link} from 'react-router-dom'
import './Page2.css';

class Page2 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Page2">
                <div className="side">  
                    <span>Pick your side</span>
                </div>
                <div className="Choose">
                    <img className="imgX" src={X}/>
                    <img className="imgO" src={O}/>
                    <div className="radios"><input type="radio" value="1" className="rdo" name="Choise"/></div>
                    <div className="radios"><input type="radio" value="2" className="rdo" name="Choise"/></div>
                </div>
                <div className="Cont">
                    <Link to={this.props.location.player === 'AI'?"/pageAI":"/page3"}><button type="submit" className="continue">Continue</button></Link>
                </div>
            </div>
        );
    }
}

export default Page2