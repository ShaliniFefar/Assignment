import React, { Component } from 'react';
import data from './emailData';
import Email from './Email';
import './List.css';


class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name:"",
            subject:"",
            text:"",
            showEmail : false
        }
    }
      
    handleClick = (event) => {
        
        this.setState({
            name: event.currentTarget.dataset.div_id,
            subject: event.currentTarget.dataset.div_sub,
            text: event.currentTarget.dataset.div_tex,
            showEmail: true
          })    
    }
    backToList = () => {
        this.setState ({
            showEmail : false
        })
    }

    render() {
        const JSONValues=data.map((x) => 
                <div className="container">
                <table>
                    <tr>
                        <td className="checkboxTd">
                            <input type="checkbox"></input>
                        </td>
                        <td className="fromTd" onClick={this.handleClick.bind(this)} data-div_id={x.from} data-div_sub={x.subject} data-div_tex={x.text}>
                            {x.from}
                        </td>
                        <td className="textTd">
                            {x.text}
                        </td>
                    </tr>
                </table>   
                </div>
                )  
        
        return (
            <div>
            { this.state.showEmail ? 
            <div>                
                <Email name={this.state.name} subject={this.state.subject} text={this.state.text}/>
                <br/> <br/> 
                <button onClick={this.backToList}>Back to List</button>
            </div>  :
            <div> {JSONValues} </div>
                }
            </div>
        )        
    }
}

export default List;