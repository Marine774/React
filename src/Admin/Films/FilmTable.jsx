import React from 'react';

const FilmTable = (props) => {
    return (
        <table>
           
            <tbody>
                { props.films.length > 0 ? (
                    props.films.map(user => {
                        const {id, title, description} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td>
                                <button class="m-3 p-2 btn btn-sm btn-danger" onClick={() => props.deleteFilm(id)}>Supprimer</button> 
                                <button class="m-3 p-2 btn btn-sm btn-secondary"  onClick={() => props.editFilm(id, user)}>Editer</button> 
                               
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No films found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default FilmTable;