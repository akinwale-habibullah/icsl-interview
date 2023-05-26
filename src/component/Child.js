import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Child({ studentList, onStudentDelete, onAddNewStudent }) {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState(0)
  let listItems = [];

  for (let index = 0; index < studentList.length; index++) {
    listItems.push(
      <li key={studentList[index].id} id={studentList[index].id}>{studentList[index].name}</li>
    )
  }

  const handleDeleteStudent = (e) => {
    const id = e.target.id;
    onStudentDelete(id)
  }

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break;
      case 'gender':
        setGender(e.target.value)
        break;
      case 'age':
        setAge(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    const newStudent = {
      id: uuidv4(),
      name,
      gender,
      age
    }

    onAddNewStudent(newStudent)

    setName('')
    setGender('')
    setAge('')
  }

  return (
    <div>
      <ul onClick={handleDeleteStudent}>
        {listItems}
      </ul>

      <br />

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name </label>
        <input type="text" name='name' value={name} onChange={handleInput} required/>
        <br />
        <label htmlFor="gender">Gender </label>
        <select name="gender" value={gender}  onChange={handleInput} id="gender">
          <option value="">Please choose an option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
        </select>

        <br />
        <label htmlFor="age">Age </label>
        <input type="number" name='age' value={age} onChange={handleInput} required/>
        <br />
        <input type="submit" value="Add new student" />
      </form>
    </div>
  )
}

export default Child