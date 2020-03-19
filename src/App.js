import React from 'react';
import Page1 from './Page1';
import Page3 from './Page3';
import Page2 from './Page2';
import PageAI from './PageAI';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
class App extends React.Component{
    render(){
        return(
            <Router>
                <Route path="/" exact component={Page1}/>
                <Route path="/page2" component={Page2}/>
                <Route path="/page3" component={Page3}/>
                <Route path="/pageAI" component={PageAI}/>
            </Router>
        )
    }
}
export default App