import React, { useState, useEffect } from 'react'


const EditForm = ({ setEdit, currentUser, updateUser }) => {
  const [user, setUser] = useState(currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, user)
    console.log('updatedUSer', user)
  }
 
  
  return (
    <div>
     <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
            <label>Name</label>
            <input 
            type="text"
            name='name'
            value={user.name}
            onChange={handleInputChange}
            className="border-2 border-blue-100"
            />

            <label>Username</label>
            <input 
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            className="border-2 border-blue-100"
            />

            <button className="bg-slate-900 rounded-md text-white my-2">Update User</button>
            <button className="bg-slate-900 rounded-md text-white my-2" onClick={ () => setEdit(true) }>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default EditForm