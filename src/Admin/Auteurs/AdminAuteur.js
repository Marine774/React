import React, { Component} from 'react';
import  { useState } from 'react'
import List from "./List";
import AddAuteur from "./AddAuteur"
import EditAuteur from './EditAuteur'
import AuteurTable from './AuteurTable'

const AdminAuteur = () => {
    const [auteurs, setAuteur] = useState(List);
  
    const addAuteur = (auteur) => {
      auteur.id = auteurs.length + 1;
      setAuteur([...auteurs, auteur]);
    };
  
    const deleteAuteur = (id) => {
      setAuteur(auteurs.filter((auteur) => auteur.id !== id));
    };
  
    const [editing, setEditing] = useState(false);
  
    const initialAuteur = { id: null, name: "", auteurname: "" };
  
    const [currentAuteur, setCurrentAuteur] = useState(initialAuteur);
  
    const EditAuteur = (id, auteur) => {
      setEditing(true);
      setCurrentAuteur(auteur);
    };
  
    const updateAuteur = (newAuteur) => {
      setAuteur(
        auteurs.map((auteur) => (auteur.id === currentAuteur.id ? newAuteur : auteur))
      );
      setCurrentAuteur(initialAuteur);
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
                  currentAuteur={currentAuteur}
                  setEditing={setEditing}
                  updateAuteur={updateAuteur}
                />
              </div>
            ) : (
              <div>
                <h2>Ajout d'un auteur</h2>
                <AddAuteur addAuteur={addAuteur} />
              </div>
            )}
          </div>
          <div className="seven columns">
            <h2>Liste des auteurs</h2>
            <AuteurTable
              auteurs={auteurs}
              deleteAuteur={deleteAuteur}
              EditAuteur={EditAuteur}
            />
          </div>
        </div>
      </div>
    );
  };
export default AdminAuteur;