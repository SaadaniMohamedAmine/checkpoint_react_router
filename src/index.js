import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Details from './Details'
import {Route,BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
   
   <Router>
     <Route exact path="/" component={Home} />
     <Route  path='/moviesList' render={()=><App />} />
     
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
