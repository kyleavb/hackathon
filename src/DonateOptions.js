import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Icon, Button} from 'react-materialize';
import FooterDonate from './FooterDonate';
import Profile from './Profile';
import DonateBarcode from './DonateBarcode';

class DonateOptions extends Component{
  render() {
    return(
      <div>

        <Row>
          <Col s={2}>
            <p><Link to='/Profile'>Back</Link></p>
          </Col>
        </Row>

        <Row className="row-div">
          <Col s={8} offset='s2'>
            <h2>How would you like to create your list?</h2>
          </Col>
          <Col s={8} offset='s2'>
            <Link to='/DonateBarcode'><img className="logo-icon" src="./barcode.png" alt="barcode" /></Link>
          </Col>
          <Col s={8} offset='s2'>
            <img className="logo-icon" src="./keyboard.png" alt="barcode" />
          </Col>
        </Row>


        
      </div>
    )
  }
}

export default DonateOptions;
