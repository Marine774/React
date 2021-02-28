import React from 'react';

const FilmTable = (props) => {
    return (
        <table>
           
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, title, description} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td>
                                <button class="m-3 p-2 btn btn-sm btn-danger" onClick={() => props.deleteUser(id)}>Supprimer</button> 
                                <button class="m-3 p-2 btn btn-sm btn-secondary"  onClick={() => props.editUser(id, user)}>Editer</button> 
                               
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default FilmTable;