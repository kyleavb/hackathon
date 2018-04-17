import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Icon, Button} from 'react-materialize';
import FooterDonate from './FooterDonate';
import Profile from './Profile';
import DonateConfirm from './DonateConfirm';



class DonateBarcode extends Component {

  constructor(props) {
  super()
  this.state = {
    body: []

  }
  this.changeBody = this.changeBody.bind(this)
  }

  changeBody(event) {
    var value = prompt()
    var temp = this.state.body
    temp.push(value)
    this.setState({
      body: temp
    })
    console.log(this.state.body)
  }

  render() {
    console.log(this.state.body)
    let allBody = this.state.body.map(function(body, index) {
      return <li key={index}>{body}<Icon small className="icon-delete">do_not_disturb_on</Icon><hr /></li>
    })


    return(
      <div>

          <Row>
          <Col s={2}>
            <p><Link to='/Profile'>Back</Link></p>
          </Col>
          </Row>

          <Row>
          <Col s={8} offset='s2'>
            <Link to='/DonateBarcode'><img className="logo-icon" src="./barcode.png" alt="barcode" /></Link>
          </Col>
          </Row>

          <Row>
          <Col s={10} offset='s1' className="left-align">
            <ul>
            {allBody}
            </ul>
          </Col>

          </Row>

          <Row className="valign-wrapper">
          <Col s={6}  className="button-col">
            <Button className="button-submit" large waves='light'><Link to='/DonateConfirm'></Link>Submit</Button>
          </Col>

          <Col s={6}  className="button-col">
            <Button floating large className='red'waves='light' icon='add'
            onClick={ (event) => this.changeBody(event) }></Button>
            <p>Add Item</p>
          </Col>
          </Row>

        <FooterDonate />
      </div>
    )
  }
}

export default DonateBarcode;
