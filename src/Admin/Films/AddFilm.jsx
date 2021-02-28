import React, {useState} from 'react';

const AddFilm = (props) => {

    const initUser = {id: null, title: '', description: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {title, value} = e.target;
        setUser({...user, [title]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.title && user.description) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
     <div id="addFilm">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Title"  value={user.title} title="title" onChange={handleChange} ></input>
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Description"  value={user.description} title="description" onChange={handleChange} ></input>
        </div>

        <button class="m-3 p-2 btn btn-sm btn-success" onClick={handleSubmit}>Ajouter</button> 

    </div>
    )
}

export default AddFilm;