import React, {useState, useEffect} from 'react';

const EditFilm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {title, value} = e.target;
        setUser({...user, [title]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.title && user.description) props.updateUser(user);
    }

    return (
        <div id="addFilm">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Title"  value={user.title} title="title" onChange={handleChange} ></input>
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Description"  value={user.description} title="description" onChange={handleChange} ></input>
        </div>

        <button class="m-3 p-2 btn btn-sm btn-secondary" onClick={handleSubmit}>Editer</button> 
        <button class="m-3 p-2 btn btn-sm btn-danger" onClick={() => props.setEditing(false)}>Supprimer</button> 

    </div>
      
    )
}

export default EditFilm;