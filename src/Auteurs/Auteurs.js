import React, { Component} from 'react';

import Posts from "./Posts"

class Auteurs extends Component{
    render(){
        return (
            <div id="categories">
                <h1>Auteurs</h1>
                <Posts/>
            </div>
        )
		}
}

export default Auteurs;