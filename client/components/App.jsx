import React from 'react'
import StudentList from './StudentList.jsx'

export default class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  clickMe(msg) {
    console.log('clicked', msg)
  }

  render() {
    return (
      <div onClick={this.clickMe.bind(this, 'hi')}>
        <h1 style={{ textAlign: 'center' }}>Hello World!</h1>
        <StudentList />
      </div>
    )
  }
}
