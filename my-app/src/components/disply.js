import React, { Component } from 'react';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Disply extends Component{
    render() {
        return(
        <Container>
            <Row>
                <Col>
                   <div>{this.props.input}</div>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Disply;