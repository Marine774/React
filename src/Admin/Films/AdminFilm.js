import React, { Component} from 'react';
import  { useState } from 'react'
import List from "./List";
import AddFilm from "./AddFilm"
import EditFilm from './EditFilm'
import FilmTable from './FilmTable'

const AdminFilm = () => {
    const [films, setFilms] = useState(List);
  
    const addFilms = (film) => {
      film.id = films.length + 1;
      setFilms([...films, film]);
    };
  
    const deleteFilm = (id) => {
      setFilms(films.filter((film) => film.id !== id));
    };
  
    const [editing, setEditing] = useState(false);
  
    const initialFilm = { id: null, name: "", filmname: "" };
  
    const [currentFilm, setCurrentUser] = useState(initialFilm);
  
    const editFilm = (id, film) => {
      setEditing(true);
      setCurrentUser(film);
    };
  
    const updateFilm = (newUser) => {
      setFilms(
        films.map((film) => (film.id === currentFilm.id ? newUser : film))
      );
      setCurrentUser(initialFilm);
      setEditing(false);
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="five columns">
            {editing ? (
              <div>
                <h2>Modifier un film</h2>
                <EditFilm
                  currentFilm={currentFilm}
                  setEditing={setEditing}
                  updateFilm={updateFilm}
                />
              </div>
            ) : (
              <div>
                <h2>Ajout d'un film</h2>
                <AddFilm addFilms={addFilms} />
              </div>
            )}
          </div>
          <div className="seven columns">
            <h2>Liste des films</h2>
            <FilmTable
              films={films}
              deleteFilm={deleteFilm}
              editFilm={editFilm}
            />
          </div>
        </div>
      </div>
    );
  };
export default AdminFilm;