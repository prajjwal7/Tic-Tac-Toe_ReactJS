import React from 'react';

import X from './X.png';
import O from './O.png';
import S from './Settings-icon.png';
import {Link} from 'react-router-dom'
import './Page1.css'
import PageAI from './PageAI';

class Page1 extends React.Component {
    constructor() {
        super();
        this.state = {
            select: ''
        }
        this.handleClickAI = this.handleClickAI.bind(this);
        this.handleClickFriend = this.handleClickFriend.bind(this);
    }
    handleClickAI() {
        this.setState({
            select : 'AI'
        }
        );
    }
    handleClickFriend() {
        this.setState({
            SELECT : 'Friend'
        });
    }
    render() {
        return (
        <div className="Page1">
            <div className="XandO">
                <img className="imgX" src={X}/>
                <img className="imgO" src={O}/>
            </div>
            <div className="Mode">
                <span className="playMode">Choose your play mode</span>
            </div>
            <div className="playWith">
                <Link to={{
                    pathname:"/page2",
                    player:"AI"
                }}><button type="submit" className="buttonAI" onClick={this.handleClickAI}>
                    With AI
                </button>
                </Link>
                <br/>
                <Link to="/page2"><button type="submit" className="buttonFriend" onClick={this.handleClickFriend}>With a friend</button></Link>
            </div>
            <div className="settings"></div>
        </div>
        );
    }
}

export default Page1