import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Icon, Button} from 'react-materialize';
import DonateOptions from './DonateOptions';

class HeaderDonate extends Component{

  render() {
    return(
      <Row>
        <Col s={12}>
            <img className="logo" src="./logo-placeholder.png" alt="Logo" />
        </Col>

        <Col s={12}>
          <h1>Hello Jim!</h1>

          <Link to='/DonateOptions'><Button className="button-submit" large waves='light'>Donate</Button></Link>
        </Col>


      </Row>
    )
  }
}

export default HeaderDonate;
