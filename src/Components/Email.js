import React, { Component } from 'react';
import './Email.css';


class Email extends React.Component {
    
    render() {
    	
        return(
            <div class="div-email">
            <table class="table-email">
            <tr>
                <td>To: {this.props.name}</td>
            </tr>
            <tr>
                <td>Subject: {this.props.subject}</td>
            </tr>
             <tr>
                <td> <div class="email-text">{this.props.text} </div></td>
            </tr>
             </table>
             </div> 
        )
    }

}
export default Email;