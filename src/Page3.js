import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import X from './X.png';
import O from './O.png';

class Page3 extends React.Component {

  constructor() {
    super();
    this.state = {
      turn : 'X',
      gameOver : '',
      history : Array(9).fill(''),
      won: ''
    }
    this.clicked = this.clicked.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
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
      if(this.state.turn == 'X')
        event.target.querySelector('img').src = X;
      else
        event.target.querySelector('img').src = O;
      this.state.history[event.target.dataset.which] = this.state.turn;
      this.setState({
        turn: this.state.turn == 'X' ? 'O':'X',
        p1: 0,
        p2: 0,
        history : this.state.history
      })
    }
  }
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
        won: c+'Won'
      })
  }
  }
  render() {
    return (
      <div className="Board">
        <div className="leaderBoard">
          <span className="player1">Player1</span>
          <div className="ScoreBox"><span className="scores">{this.state.p1} - {this.state.p2}</span></div>
          <span className="player2">Player2</span><br/>
          <div className="Won">
            <span className="Winner" id="won">{this.state.won}</span>
          </div>
        </div>
        <div className="BoardIn" onClick={(e) => this.clicked(e)}>
          <div className="square" data-which="0"><img src={null}/></div>
          <div className="square" data-which="1"><img src={null}/></div>
          <div className="square rightSqr" data-which="2"><img src={null}/></div>
          <div className="square" data-which="3"><img src={null}/></div>
          <div className="square" data-which="4"><img src={null}/></div>
          <div className="square rightSqr" data-which="5"><img src={null}/></div>
          <div className="square bottomSqr" data-which="6"><img src={null}/></div>
          <div className="square bottomSqr" data-which="7"><img src={null}/></div>
          <div className="square bottomSqr rightSqr" data-which="8"><img src={null}/></div>
        </div>
        
        <div className="settings2"></div>
    </div>
    );
  }
}

export default Page3;
