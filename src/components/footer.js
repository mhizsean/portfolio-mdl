import React, { Component } from 'react';
import {  FooterSection, FooterLinkList } from 'react-mdl';
import './footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <Footer size="mini" className="footer">
                <FooterSection type="left" logo="Title">
                <FooterLinkList className="list">
                    <Link to="/">Help</Link>
                    <Link to="/">Privacy & Terms</Link>
                </FooterLinkList>
                </FooterSection>
                <div className="rights">
                    @Demo 2019 All rights reserved.
                </div>
            </Footer>

        );
    }
}

export default Footer;



