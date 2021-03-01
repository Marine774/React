import React, {useState} from 'react';

const AddFilm = (props) => {

    const initFilm = {id: null, title: '', description: ''};

    const [film, setFilm] = useState(initFilm);

    const handleChange = e => {
        const {title, value} = e.target;
        setFilm({...film, [title]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (film.title && film.description) {
            handleChange(e, props.addFilms(film));
        }
    }

    return (
     <div id="addFilm">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Title"  value={film.title} title="title" onChange={handleChange} ></input>
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Description"  value={film.description} title="description" onChange={handleChange} ></input>
        </div>

        <button class="m-3 p-2 btn btn-sm btn-success" onClick={handleSubmit}>Ajouter</button> 

    </div>
    )
}

export default AddFilm;