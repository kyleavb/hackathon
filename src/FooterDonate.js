import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Icon} from 'react-materialize';

class FooterDonate extends Component{
  render() {
    return(
      <Row>
      <Col s={12}>
        <Row className="footer-donate">
          <Col s={4}>
          <Link to='/'><Icon medium className="icon">insert_chart</Icon></Link>
          </Col>
          <Col s={4}>
            <Link to='/Newlist'><Icon medium className="icon">insert_chart</Icon></Link>
          </Col>
          <Col s={4}>
          <Link to='/'><Icon medium className="icon">insert_chart</Icon></Link>
          </Col>
        </Row>
      </Col>
      </Row>

    )
  }

}

export default FooterDonate
