import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Icon} from 'react-materialize';
import DonateOptions from './DonateOptions';

class FooterDonate extends Component{
  render() {
    return(
      <Row className="footer-sticky">
      <Col s={12}>
        <Row className="footer-donate">
          <Col s={4}>
            <Icon medium className="icon">history</Icon>
          </Col>
          <Col s={4}>
            <Link to='/DonateOptions'><Icon medium className="icon">format_list_numbered</Icon></Link>
          </Col>
          <Col s={4}>
            <Icon medium className="icon">favorite_border</Icon>
          </Col>
        </Row>
      </Col>
      </Row>

    )
  }

}

export default FooterDonate
