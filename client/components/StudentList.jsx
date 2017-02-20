import React from 'react'

export default class StudentList extends React.Component {
  render () {
    const student = [
      {
        name: 'anuj',
        age: 21
      },
      {
        name: 'rahul',
        age: 11
      },
      {
        name: 'jeevan',
        age: 22
      }
    ]

    const studentList = student.map((item) => {
      return <li>name: {item.name}</li>
    })

    return (
      <ul>
        {studentList}
      </ul>
    )
  }
}
