import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Icon} from 'react-materialize';
import HeaderDonate from './HeaderDonate';
import FooterDonate from './FooterDonate';

class Profile extends Component {


    render(){
      return(
        <div>
          <Row className="row-div-header">
            <HeaderDonate />
          </Row>
      
        </div >
      )
    }
  }


export default Profile
