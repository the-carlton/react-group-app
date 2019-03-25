// React Time clock

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './clock.css';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';

let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: time,
            hours: today.getHours(),
            mins: today.getMinutes(),
            secs: today.getSeconds(),
            number: Math.floor(Math.random() * 3) + 1,
        };
    }

    componentDidMount() {
        let sec = document.getElementById('sec');
        let min = document.getElementById('min');
        let hour = document.getElementById('hours');
        let back = document.getElementById('clockContainer');

        let colors = ['red', 'blue', 'purple', 'brown', 'black', 'green', 'yellow'];

        function changecolor() {
            let number1 = Math.floor(Math.random() * 7);
            let number2 = Math.floor(Math.random() * 7);
            let number3 = Math.floor(Math.random() * 7);
            sec.style.color = colors[number1];
            min.style.color = colors[number2];
            hour.style.color = colors[number3];
        }

        function changebackground() {
            let number1 = Math.floor(Math.random() * 3);
            // console.log(number1);
            if(number1 == 0) {
                back.classList.toggle("class1");
            } else if(number1 == 1){
                back.classList.toggle("class2");
            } else if(number1 == 2){
                back.classList.toggle("class3");
            }
        }


        this.interval = setInterval(() => this.setState({
            mins: new Date().getMinutes(),
            secs: new Date().getSeconds(),
            hours: new Date().getHours(),
            number: Math.floor(Math.random() * 3) + 1,
            color: changecolor(),
            image: changebackground()
        }), 1000);



    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            <Container className="container-fluid" id="clockContainer">
                <Row>
                    <div className="mx-auto">
                        <Col className="col-md-12">
                            <div id="time"><span id="hours">{ this.state.hours }:</span><span id="min">{ this.state.mins }:</span><span id="sec">{ this.state.secs }</span></div>
                        </Col>
                    </div>
                </Row>
            </Container>
        );
    }

}

export default Clock;
