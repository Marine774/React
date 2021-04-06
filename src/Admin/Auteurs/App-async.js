import React, { useState, useEffect } from "react";
import List from "./List";
import AddAuteur from "./AddAuteur"
import EditAuteur from './EditAuteur'
import AuteurTable from './AuteurTable'

import { useAsyncRequest } from "./hooks";

const App = () => {
  const [data, loading] = useAsyncRequest(3);
  // Fixed array of auteurs:
  // const [auteurs, setAuteur] = auteurList;
  const [auteurs, setAuteur] = useState(null);

  useEffect(() => {
    if (data) {
      const formattedAuteur = data.map((obj, i) => {
        return {
          id: i,
          nom: obj.nom.first
        };
      });
      setAuteur(formattedAuteur);
    }
  }, [data]);

  const addAuteur = (auteur) => {
    auteur.id = auteurs.length;
    setAuteur([...auteurs, auteur]);
  };

  const deleteAuteur = (id) => {
    setAuteur(auteurs.filter((auteur) => auteur.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialAuteur = { id: null, nom: "" };

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
             
              <EditAuteur
                currentAuteur={currentAuteur}
                setEditing={setEditing}
                updateAuteur={updateAuteur}
              />
            </div>
          ) : (
            <div>
              
              <AddAuteur addAuteur={addAuteur} />
            </div>
          )}
        </div>
        {loading || !auteurs ? (
          <p>Loading...</p>
        ) : (
          <div className="seven columns">
         

            <AuteurTable
              auteurs={auteurs}
              deleteAuteur={deleteAuteur}
              EditAuteur={EditAuteur}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
