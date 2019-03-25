//React Form Component
import React, { Component } from 'react';
import Disply from "./disply.js";
import './form.css';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
} from 'reactstrap';
import Contact from "./Contacts";

class Form1 extends Component{
    constructor (props) {
        super(props);
        this.state = {
            inputvalue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        console.log('Form value one: ' + this.state.inputvalue + ' and two: ' + this.state.inputvalue2);
        event.preventDefault();
    }

    handleChange (event) {
        let output = document.getElementById('output');
        this.setState({
            inputvalue: event.target.value,
            output: output
        })
    }


    componentDidMount() {
        
    }

    render(){
        return(
            <Container id="formCon">
                <Row id={"row"}>
                    <div id="form1" className="mx-auto">
                        <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
                            <label>Name</label><br/>
                            <input className="form-control" type="text" value={this.state.inputvalue} onChange={this.handleChange.bind(this)}/><br/>
                            <input className="form-control" type="submit" value="Submit"/>
                        </form>
                        <div>
                            <Disply input={this.state.inputvalue}/>
                        </div>
                    </div>
                </Row>
            </Container>

        )
    }
}

export default Form1;
