import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons'

const UserTable = ({ users, deleteUser, editMode }) => {
  return (
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td className="px-4">Username</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
           {
               users.length > 0 ? 
               users.map((user) => (
                   <tr key={user.id}>
                       <td>{user.name}</td>
                       <td className="px-8">{user.username}</td>
                       <td>
                           <FontAwesomeIcon icon={faPenSquare} className="text-yellow-400 cursor-pointer"  onClick={() => editMode(user)} />
                           <FontAwesomeIcon icon={faTrash} className="text-red-400 mx-4 cursor-pointer" onClick={() => deleteUser(user.id)}  />
                       </td>
                   </tr>
               )) : (
                   <div>No Users</div>
               )
           }
                
        </tbody>
    </table>
  )
}

export default UserTable