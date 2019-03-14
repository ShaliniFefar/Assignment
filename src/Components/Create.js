import React, { Component } from 'react';
import './Create.css';

class Create extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        to: '',
        subject: '',
        body: ''
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e=> {
        alert('Email created successfully...!!!!');
        this.setState(
            {
                to: '',
                subject: '',
                body: ''   
            }
        )
    }

    render() {
        return (
            <form>
                <label>
                    To:
                <input 
                name="to"
                type="email"
                value={this.state.to} 
                onChange= {e => this.change(e)}/>
                </label>
                <br /> <br />
                <label>
                    Subject:
                <input 
                name="subject"
                value={this.state.subject} 
                onChange= {e => this.change(e)}/>
                <br /> <br />
                </label>

                <textarea 
                name="body"
                value={this.state.body} 
                onChange= {e => this.change(e)}/>
                <br /> <br />

                <button onClick={() => this.onSubmit()}> Send </button>
            </form>
        )
    }
}
export default Create;