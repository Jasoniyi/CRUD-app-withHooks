import React, { useState } from 'react'

const AddUser = ({ addUser }) => {
  const initialState = {id: null, name: '', username: ''};

  const [user, setUser] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]:value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!user.name || !user.username) return 

    addUser(user)
    setUser(initialState)
  }
 

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <div className="flex flex-col">
            <label>Name</label>
            <input 
            type="text"
            name="name"
            value= {user.name}
            onChange = {handleInputChange} 
            className="border-2 border-blue-100"
            />

            <label>Username</label>
            <input 
            type="text"
            name="username"
            value= {user.username}
            onChange = {handleInputChange}
            className="border-2 border-blue-100"
            />

            <button className="bg-slate-900 rounded-md text-white my-2">Add User</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser