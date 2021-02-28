import React, { Component} from 'react';

import Posts from"./Posts"

class Categories extends Component{
    render(){
        return (
            <div id="categories">
                <h1>Categories</h1>
            
                <Posts/>
            </div>
        )
		}
}

export default Categories;