import React, { useState, useEffect } from "react";
import List from "./li";
import FilmTable from "./FilmTable";
import AddFilm from "./AddFilm";
import EditFilm from "./EditFilm";

import { useAsyncRequest } from "./hooks";

const App = () => {
  const [data, loading] = useAsyncRequest(3);
  // Fixed array of films:
  // const [films, setFilm] = filmList;
  const [films, setFilm] = useState(null);

  useEffect(() => {
    if (data) {
      const formattedUsers = data.map((obj, i) => {
        return {
          id: i,
          title: obj.title.first,
          description: obj.title.first + " " + obj.title.last,
        };
      });
      setFilm(formattedUsers);
    }
  }, [data]);

  const addFilm = (film) => {
    film.id = films.length;
    setFilm([...films, film]);
  };

  const deleteFilm = (id) => {
    setFilm(films.filter((film) => film.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialFilm = { id: null, title: "", description: "" };

  const [currentFilm, setCurrentUser] = useState(initialFilm);

  const editFilm = (id, film) => {
    setEditing(true);
    setCurrentUser(film);
  };

  const updateFilm = (newUser) => {
    setFilm(
      films.map((film) => (film.id === currentFilm.id ? newUser : film))
    );
    setCurrentUser(initialFilm);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit film</h2>
              <EditFilm
                currentFilm={currentFilm}
                setEditing={setEditing}
                updateFilm={updateFilm}
              />
            </div>
          ) : (
            <div>
              <h2>Add film</h2>
              <AddFilm addFilm={addFilm} />
            </div>
          )}
        </div>
        {loading || !films ? (
          <p>Loading...</p>
        ) : (
          <div className="seven columns">
            <h2>View films</h2>

            <FilmTable
              films={films}
              deleteFilm={deleteFilm}
              editFilm={editFilm}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
