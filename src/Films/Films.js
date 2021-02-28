import React, { Component} from 'react';


import {View, Button,TextInput, FlatList} from 'react-native'

import Posts from "./Posts"

class Films extends Component{

  render(){
    return (
        <div id="films">
            <h1>Films</h1>
                <Posts/>
           
        </div>
    )
}
}

export default Films;