import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Profile from './components/Profile.jsx'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='about' component={About}/>
      <Route path='profile' component={Profile}/>
    </Route>
  </Router>, document.getElementById('root')
)
