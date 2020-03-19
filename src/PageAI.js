import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import X from './X.png';
import O from './O.png';
import { Switch } from 'react-router';

class PageAI extends React.Component {

  constructor() {
    super();
    this.state = {
      turn : 'X',
      gameOver : '',
      history : Array(9).fill(''),
      p1: 0,
      p2: 0,
      won: ''
    }
    this.b0 = React.createRef();
    this.b1 = React.createRef();
    this.b2 = React.createRef();
    this.b3 = React.createRef();
    this.b4 = React.createRef();
    this.b5 = React.createRef();
    this.b6 = React.createRef();
    this.b7 = React.createRef();
    this.b8 = React.createRef();
    this.clicked = this.clicked.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.checkIfOWinsInNextMove = this.checkIfOWinsInNextMove.bind(this);
    this.checkIfXWinsInNextMove = this.checkIfXWinsInNextMove.bind(this);
    this.getLine = this.getLine.bind(this);
  }

  checkWinner(history) {
      if(((history[0] == history[1] && history[1] == history[2]) || 
        (history[0] == history[3] && history[3] == history[6]) ||
        (history[0] == history[4] && history[4] == history[8])) && history[0] != '') {
          return history[0];
      }
      else if(((history[2] == history[4] && history[4] == history[6]) || 
        (history[2] == history[5] && history[5] == history[8])) && history[2] != '') {
          return history[2];
      }
      else if(((history[1] == history[4] && history[4] == history[7]) || 
        (history[3] == history[4] && history[4] == history[5])) && history[4] != '' ) {
            return history[4];
      }
      else if((history[6] == history[7] && history[7] == history[8]) && history[6] != '' ) {
            return history[6];
      }
      else {
        return '';
      }
  }
  
  getLine(history){
    var s=0;
    var a = Array(9);
    for(var i=0;i<9;i++){
      if(history[i] === 'X')
        a[i] = 1;
      else if(history[i] === 'O')
        a[i] = 4;
      else
        a[i] = 0;
    }
    var b=Array(8);
    b[0] = a[0]+a[1]+a[2];
    b[1] = a[3]+a[4]+a[5];
    b[2] = a[6]+a[7]+a[8];
    b[3] = a[0]+a[3]+a[6];
    b[4] = a[7]+a[1]+a[4];
    b[5] = a[5]+a[8]+a[2];
    b[6] = a[0]+a[4]+a[8];
    b[7] = a[6]+a[4]+a[2];
    return b;
  }
  checkIfOWinsInNextMove(history) {
    var b = this.getLine(history);
    for(var i=0;i<8;i++){
      if(b[i] == 8)
        return i;
    } 
    return -1;
  }

  checkIfXWinsInNextMove(history) {
    var b = this.getLine(history);
    for(var i=0;i<8;i++){
      if(b[i] == 2)
        return i;
    }
    return -1; 
  }

  findPos(o,history){
    switch(o){
      case 0:
        if(history[0] == '')
          return 0;
        if(history[1] == '')
          return 1;
        if(history[2] == '')
          return 2;
        break;
      case 1:
        if(history[3] == '')
          return 3;
        if(history[4] == '')
          return 4;
        if(history[5] == '')
          return 5;
        break;
      case 2:
        if(history[6] == '')
          return 6;
        if(history[7] == '')
          return 7;
        if(history[8] == '')
          return 8;
        break;
      case 3:
        if(history[0] == '')
          return 0;
        if(history[3] == '')
          return 3;
        if(history[6] == '')
          return 6;
        break;    
      case 4:
        if(history[1] == '')
          return 1;
        if(history[4] == '')
          return 4;
        if(history[7] == '')
          return 7;
        break;
      case 5:
        if(history[2] == '')
          return 2;
        if(history[5] == '')
          return 5;
        if(history[8] == '')
          return 8;
        break;
      case 6:
        if(history[0] == '')
          return 0;
        if(history[4] == '')
          return 4;
        if(history[8] == '')
          return 8;
        break;
      case 7:
        if(history[2] == '')
          return 2;
        if(history[4] == '')
          return 4;
        if(history[6] == '')
          return 6;
        break;
      }
  } 
  findBestPosition(history){
    var o = this.checkIfOWinsInNextMove(history);
    var p =this.checkIfXWinsInNextMove(history);
    if(o != -1){
      var i = this.findPos(o,history)
      return i;
    }
    else if(p != -1){
      var i = this.findPos(p,history)
      return i;
    }
    else{
      for(var i=0;i<9;i++){
        if(history[i] == '')
          return i;
      }
    }
  }
  clicked(event) {
    var c = this.checkWinner(this.state.history);
    if(c == '') {
      var z=0;
      for(var i = 0;i< 9; i++){
        if(this.state.history[i] == '')
          z++;
      }
      if(z==0){
        this.setState({
          won: "Match Draw"
        });

      }
      else{
    if(this.state.history[event.target.dataset.which] == '') {
      
      event.target.querySelector('img').src = X;
      this.state.history[event.target.dataset.which] = this.state.turn;
      var p=this.findBestPosition(this.state.history)
      switch(p + 1){
      case 1:
        this.b0.current.querySelector('img').src = O;
        break;
      case 2:
        this.b1.current.querySelector('img').src = O;
        break;
      case 3:
        this.b2.current.querySelector('img').src = O;
        break;
      case 4:
        this.b3.current.querySelector('img').src = O;
        break;
      case 5:
        this.b4.current.querySelector('img').src = O;
        break;
      case 6:
        this.b5.current.querySelector('img').src = O;
        break;
      case 7:
        this.b6.current.querySelector('img').src = O;
        break;
      case 8:
        this.b7.current.querySelector('img').src = O;
        break;
      case 9:
        this.b8.current.querySelector('img').src = O;
        break;
      }
      this.state.history[p] = 'O';
      this.setState({
        history : this.state.history
      })
    }}
  }else {
      if(c === 'X'){
        this.setState({
          p1: this.state.p1 + 1
        })
      }
      else{
        this.setState({
          p2: this.state.p2 + 1
        })
      }
      this.setState({
        won: c+'  Won'
      })
  }
  }
  render() {
    return (
      <div className="Board">
        <div className="leaderBoard">
          <span className="player1">Alex</span>
          <div className="ScoreBox"><span className="scores">{this.state.p1} - {this.state.p2}</span></div>
          <span className="player2">AI</span><br/>
          <div className="Won">
            <span className="Winner" id="won">{this.state.won}</span>
          </div>
        </div>
        <div className="BoardIn" onClick={(e) => this.clicked(e)}>
          <div className="square" ref={this.b0} data-which="0"><img src={null}/></div>
          <div className="square" ref={this.b1} data-which="1"><img src={null}/></div>
          <div className="square rightSqr" ref={this.b2} data-which="2"><img src={null}/></div>
          <div className="square" ref={this.b3} data-which="3"><img src={null}/></div>
          <div className="square"  ref={this.b4} data-which="4"><img src={null}/></div>
          <div className="square rightSqr" ref={this.b5} data-which="5"><img src={null}/></div>
          <div className="square bottomSqr" ref={this.b6} data-which="6"><img src={null}/></div>
          <div className="square bottomSqr" ref={this.b7} data-which="7"><img src={null}/></div>
          <div className="square bottomSqr rightSqr" ref={this.b8} data-which="8"><img src={null}/></div>
        </div>
        
        <div className="settings2"></div>
    </div>
    );
  }
}

export default PageAI;
