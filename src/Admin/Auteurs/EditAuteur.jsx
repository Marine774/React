import React, {useState, useEffect} from 'react';

const EditFilm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {nom, value} = e.target;
        setUser({...user, [nom]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.nom) props.updateUser(user);
    }

    return (
        <div id="addFilm">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="nom"  value={user.nom} nom="nom" onChange={handleChange} ></input>
        </div>


        <button class="m-3 p-2 btn btn-sm btn-secondary" onClick={handleSubmit}>Editer</button> 
        <button class="m-3 p-2 btn btn-sm btn-danger" onClick={() => props.setEditing(false)}>Supprimer</button> 

    </div>
      
    )
}

export default EditFilm;