import React, {useState} from 'react';

const AddFilm = (props) => {

    const initUser = {id: null, nom: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {nom, value} = e.target;
        setUser({...user, [nom]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.nom ) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
     <div id="addFilm">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Nom et prénom"  value={user.nom} name="nom" onChange={handleChange} ></input>
        </div>


        <button class="m-3 p-2 btn btn-sm btn-success" onClick={handleSubmit}>Ajouter</button> 

    </div>
    )
}

export default AddFilm;