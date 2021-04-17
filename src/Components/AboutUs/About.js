import React from 'react';
import {Row,Container,Card,Col,ListGroup} from 'react-bootstrap';
import '../AboutUs/Aboutus.css';

class About extends React.Component{
    render(){
        return(
            <Container style={{marginTop: "20px"}}>
            <Row xl={2}>
                <Col>
            <Card>
                <Card.Img variant="top" src="meet2.jpg"/>
                <Card.Body>
                    <Card.Header><b>Full-Stack Developer</b></Card.Header>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <ListGroup>
                <ListGroup.Item><b>TECHNICAL SKILLS</b></ListGroup.Item>
                <ListGroup.Item><b>Programming Languages : </b>C#, C++, C,Java. </ListGroup.Item>
                <ListGroup.Item><b>Web Development :</b> PHP(Core PHP), Wordpress, JavaScript, JQuery, BootStrap, HTML, CSS3.</ListGroup.Item>
                <ListGroup.Item><b>Application Development :</b> Android</ListGroup.Item>
                <ListGroup.Item><b>FrameWork : </b>Nodejs and Reactjs</ListGroup.Item>
                <ListGroup.Item><b>Databases :</b> PostgreSQL, MySQL, MySQL Workbench and Microsoft SQL server.</ListGroup.Item>
                <ListGroup.Item><b>Software Familiarity :</b> Microsoft Visual Studio, Android Studio, NetBeans, Slack, SQL,Visual Studio Code, Docker.
</ListGroup.Item>
            </ListGroup>
            
            </Col>
            </Row>
            </Container>
        )
    }
}

export default About;