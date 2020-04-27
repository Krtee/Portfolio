import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import * as serviceWorker from './serviceWorker';
import App from "./js/App";
import Code from "./jsx/home/Code";
import { BrowserRouter as Router,Route, Switch, Link, Redirect} from "react-router-dom";
import NotFound from "./jsx/NotFound/404";
import Main from "./jsx/Portfolio/Main";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
        <Route exact path={'/'} component={Code}/>
        <Route exact path={'/about'} component={Main}/>
        <Route exact path={'/404'} component={NotFound}/>
        <Redirect to={'404'}/>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
