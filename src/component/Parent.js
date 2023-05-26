import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Child from './Child'

function Parent() {
  const data = [
    {
      id: uuidv4(),
      name: 'Akinwale HAbib',
      gender: 'Male',
      age: '30'
    },
    {
      id: uuidv4(),
      name: 'Issac Abraham',
      gender: 'Male',
      age: '19'
    },
    {
      id: uuidv4(),
      name: 'Nathan Mirabel',
      gender: 'Female',
      age: '25'
    }
  ]
  const [stateObject, setStateObject ] = useState(data)

  const handleDeleteStudent = (id) => {
    const newState = stateObject.filter((item) => {
      return parseInt(item.id) !== parseInt(id)
    })
    setStateObject(newState)
  }

  const handleAddNewStudent = (student) => {
    const newStudents = [student, ...stateObject]
    setStateObject(newStudents)
  }

  return (
    <Child 
      studentList={stateObject}
      onStudentDelete={handleDeleteStudent}
      onAddNewStudent={handleAddNewStudent}
      />
  )
}

export default Parent