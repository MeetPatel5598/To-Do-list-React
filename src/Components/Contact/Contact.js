import React from 'react';
import {Form ,Container,Row, Col,Button,Image} from 'react-bootstrap';
import '../Contact/Contact.css';

class Contact extends React.Component{
    render(){
        return(
          <Container className="contact-backgorund">
             <Row>
          <Col xs={8} md={6} xl={4}>
                <Image src="meet.JPG"/>
            </Col>
          <Col>
          <Form>
          <Form.Group controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" autoComplete="false"/>
        </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>What is This About</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Button variant="warning" type="submit">
    Submit
  </Button>

          </Col>
        </Row> 
          </Container>
        )
    }
}

export default Contact;