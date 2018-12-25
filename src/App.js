import React, { Component } from 'react';
import './App.scss';
import {Router,Switch,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import My from './component/My/My';
import Detail from './component/Detail/Deatil';
import Celebrity from './component/Celebrity/Celebrity';
import Subject from './component/Subject/Subject';
import { hot } from 'react-hot-loader';
import Search from './component/Search/Search';
import Comment from "./component/Comment/Comment";
import createHashHistory from "history/createHashHistory";
const history = createHashHistory();
class App extends Component {
  render() {
    return (
     
      <Router history={history}>
        <>
       
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route  path="/My" component={My} />
          <Route path="/Detail/:id" component={Detail} />
          <Route path="/Celebrity/:id" component={Celebrity} />
          <Route path="/Subject/:id" component={Subject} />
          <Route path="/Search" component={Search} />
          <Route path="/Comment" component={Comment} />
          </Switch>
          </>
       
      </Router>
        
    );
  }
}




export default hot(module)(App)

