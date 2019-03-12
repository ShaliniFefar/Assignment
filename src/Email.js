import React, { Component } from 'react';
import List from './List';


class Email extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
             <p >{this.props.name}</p>   
        )
    }

}

export default Email;