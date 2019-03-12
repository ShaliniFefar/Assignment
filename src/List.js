import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from './emailData';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import Email from './Email'


class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name:"asd"
        }
        this.handleClick = this.handleClick.bind(this);
    }
      
    handleClick(id) {
        this.setState({
            name: id
          })
    }

    render() {
        return (
            
            data.map((x) => 
                <div className="container">
                    <table>
                        <tbody> 
                            <tr key={x.id}>
                                <td  onClick={id => {this.setState({name:id})}} key={x.id} name={x.from}>{x.from}</td>
                                <td key={x.id} name={x.from}>{x.text}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )
             )
             
             
        
    }
}
export default List;