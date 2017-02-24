import React from 'react'
import Home from './Home.jsx'
import {Link, IndexLink} from 'react-router'

export default class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ul className='header'>
          <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
          <li><Link to='/about' activeClassName='active'>About</Link></li>
          <li><Link to='/profile' activeClassName='active'>Profile</Link></li>
        </ul>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
