import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import '../Footer/Footer.css';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component{

    render(){
        return(
        <Container bg="dark" variant="dark" className="footer-style text-centered">
            <Row>
            <Col>
            <SocialIcon url="linkedin.com/in/meet-patel-891005145" />
            </Col>
            <Col>
            <SocialIcon url="https://www.instagram.com/meetpatel_0505/" />
            </Col>
            <Col>
            <SocialIcon url="https://www.facebook.com/profile.php?id=100001711333308" />
            </Col>
            </Row>
        </Container>
        )
    }
}

export default Footer;