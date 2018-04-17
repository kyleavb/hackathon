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

          <Button className="button-submit" large waves='light'><Link to='/DonateOptions'>Donate</Link></Button>
        </Col>


      </Row>
    )
  }
}

export default HeaderDonate;
