import React, { useState } from 'react';
import './App.css';
import UserTable from './utils/UserTable';
import EditForm from './utils/EditForm';
import AddUser from './utils/AddUser';

const App = () => {
  const usersData = [
    {id: 1, name: 'John', username: 'bell'},
    {id: 2, name: 'caira', username: 'sing'},
    {id: 3, name: 'craig', username: 'were'},
  ]

  const initialState = {id: null, name: '', username: ''};

  const [users, setUsers] = useState(usersData);
  const [edit, setEdit ] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialState);


  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([ ...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id ))
    console.log('id', id)
  }

  const editMode = (user) => {
    setEdit(true)
    setCurrentUser({id: user.id, name:user.name, username: user.username})
    console.log('user', user)
  }

  const updateUser = (id, updatedUser) => {
    setEdit(false)
    setUsers(users.map((user) => user.id === id ? updatedUser : user))
  }

 
  return (
    <div className="container">
      <h1 className="text-lg text-center">CRUD app</h1>
      <div className='flex justify-around'>
        <div className=''>
          {
            edit ? (
              <EditForm 
              setEdit = {setEdit}
              currentUser = {currentUser}
              updateUser = {updateUser}
              />
            ) : (
              <AddUser addUser= {addUser} />
            )
          }
        </div>
        <div className=''>
          <UserTable users={users} deleteUser={deleteUser} editMode={editMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
