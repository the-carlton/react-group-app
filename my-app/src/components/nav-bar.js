import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Navbar
} from 'reactstrap';

class Navbar1 extends Component {
    render() {
        return (
            <Navbar color="dark" light expand="md">
                <Container>
                    <h1>TEST</h1>
                </Container>
            </Navbar>
        );
    }
}

export default Navbar1;
