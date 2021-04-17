import React from 'react';
import {Row,Container,Col,Image,Card} from 'react-bootstrap';

class About extends React.Component{
    render(){
        return(
            <Container style={{marginTop: "20px"}}>
            <Row>
            <Col xs={8} md={6} xl={4}>
                <Image src="meet.JPG"/>
            </Col>
            <Col>
            
            </Col>
            </Row>
            </Container>
        )
    }
}

export default About;