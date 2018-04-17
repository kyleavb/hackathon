import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Icon, Button} from 'react-materialize';
import HeaderDonate from './HeaderDonate';
import FooterDonate from './FooterDonate';

class DonateConfirm extends Component {

  render() {
    return(
      <div>

        <Row>
          <Col s={2}>
            <p><Link to='/'>Home</Link></p>
          </Col>
        </Row>

        <Row className="row-div">
          <Col s={8} offset='s2'>
            <h1>Thank You!</h1>
            <h2>Your list was sent.</h2>
            <p>Please wait for our confirmation email.</p>
          </Col>
        </Row>

        <FooterDonate />
      </div>
    )
  }
}

export default DonateConfirm;
