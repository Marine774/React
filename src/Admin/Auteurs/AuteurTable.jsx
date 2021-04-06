import React from 'react';

const FilmTable = (props) => {
    return (
        <table>
           
            <tbody>
                { props.auteurs.length > 0 ? (
                    props.auteurs.map(auteur => {
                        const {id, nom} = auteur;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{nom}</td>
                                <td>
                                <button class="m-3 p-2 btn btn-sm btn-danger" onClick={() => props.deleteAuteur(id)}>Supprimer</button> 
                                <button class="m-3 p-2 btn btn-sm btn-secondary"  onClick={() => props.EditAuteur(id, auteur)}>Editer</button> 
                               
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No auteurs found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default FilmTable;