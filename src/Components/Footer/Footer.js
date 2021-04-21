import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import '../Footer/Footer.css';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component{

    render(){
        return(
        <div bg="dark" variant="dark" className="footer-style">
            <SocialIcon url="https://www.linkedin.com/in/meet-patel-891005145/" />
            <SocialIcon url="https://www.instagram.com/meetpatel_0505/" />
            <SocialIcon url="https://www.facebook.com/profile.php?id=100001711333308" />
        </div>
        )
    }
}

export default Footer;