import React, {useState, useEffect} from 'react';

const EditFilm = (props) => {

    useEffect(() => {
        setFilm(props.currentFilm)
    }, [props])

    const [film, setFilm] = useState(props.currentFilm);

    const handleChange = e => {
        const {title, value} = e.target;
        setFilm({...film, [title]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (film.title && film.description) props.updateFilm(film);
    }

    return (
        <div id="addFilm">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Title"  value={film.title} title="title" onChange={handleChange} ></input>
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Description"  value={film.description} title="description" onChange={handleChange} ></input>
        </div>

        <button class="m-3 p-2 btn btn-sm btn-secondary" onClick={handleSubmit}>Editer</button> 
        <button class="m-3 p-2 btn btn-sm btn-danger" onClick={() => props.setEditing(false)}>Supprimer</button> 

    </div>
      
    )
}

export default EditFilm;