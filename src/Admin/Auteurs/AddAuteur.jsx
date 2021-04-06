import React, {useState} from 'react';

const AddFilm = (props) => {

    const initAuteur = {id: null, nom: ''};

    const [auteur, setAuteur] = useState(initAuteur);

    const handleChange = e => {
        const {nom, value} = e.target;
        setAuteur({...auteur, [nom]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (auteur.nom ) {
            handleChange(e, props.addAuteur(auteur));
        }
    }

    return (
     <div id="addAuteur">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Nom et prénom"  value={auteur.nom} name="nom"  onChange={handleChange} ></input>
        </div>


        <button class="m-3 p-2 btn btn-sm btn-success" onClick={handleSubmit}>Ajouter</button> 

    </div>
    )
}

export default AddFilm;