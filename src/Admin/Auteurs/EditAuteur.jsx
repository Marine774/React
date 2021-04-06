import React, {useState, useEffect} from 'react';

const EditFilm = (props) => {

    useEffect(() => {
        setAuteur(props.currentAuteur)
    }, [props])

    const [auteur, setAuteur] = useState(props.currentAuteur);

    const handleChange = e => {
        const {nom, value} = e.target;
        setAuteur({...auteur, [nom]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (auteur.nom) props.updateAuteur(auteur);
    }

    return (
        <div id="addFilm">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="nom"  value={auteur.nom} nom="nom" onChange={handleChange} ></input>
        </div>


        <button class="m-3 p-2 btn btn-sm btn-secondary" onClick={handleSubmit}>Editer</button> 
        <button class="m-3 p-2 btn btn-sm btn-danger" onClick={() => props.setEditing(false)}>Supprimer</button> 

    </div>
      
    )
}

export default EditFilm;