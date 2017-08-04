import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import  {Router, Route, hashHistory, IndexRoute } from "react-router";

 
import WellCome from './route/wellcome';
import  Repos from './route/repos';
import About from './route/about';

ReactDOM.render(
  <Router history={hashHistory}>

      <Route path="/" component={App} >
        <IndexRoute component={WellCome} />
        <Route path="wellcome" component={WellCome}/>
          <Route path="repos/:id" component={Repos} >
				<Route path="about/:name" component={About} />
          </Route>
      </Route>
      
  </Router>,
  document.getElementById('root')
);
