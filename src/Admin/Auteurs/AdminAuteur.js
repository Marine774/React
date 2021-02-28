import React, { Component} from 'react';
import  { useState } from 'react'
import List from "./List";
import AddAuteur from "./AddAuteur"
import EditAuteur from './EditAuteur'
import AuteurTable from './AuteurTable'

const AdminAuteur = () => {
    const [users, setUsers] = useState(List);
  
    const addUser = (user) => {
      user.id = users.length + 1;
      setUsers([...users, user]);
    };
  
    const deleteUser = (id) => {
      setUsers(users.filter((user) => user.id !== id));
    };
  
    const [editing, setEditing] = useState(false);
  
    const initialUser = { id: null, name: "", username: "" };
  
    const [currentUser, setCurrentUser] = useState(initialUser);
  
    const editUser = (id, user) => {
      setEditing(true);
      setCurrentUser(user);
    };
  
    const updateUser = (newUser) => {
      setUsers(
        users.map((user) => (user.id === currentUser.id ? newUser : user))
      );
      setCurrentUser(initialUser);
      setEditing(false);
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="five columns">
            {editing ? (
              <div>
                <h2>Modifier un auteur</h2>
                <EditAuteur
                  currentUser={currentUser}
                  setEditing={setEditing}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Ajout d'un auteur</h2>
                <AddAuteur addUser={addUser} />
              </div>
            )}
          </div>
          <div className="seven columns">
            <h2>Liste des films</h2>
            <AuteurTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        </div>
      </div>
    );
  };
export default AdminAuteur;