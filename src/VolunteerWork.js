import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Icon, Button} from 'react-materialize';
import FooterDonate from './FooterDonate';
import Profile from './Profile';
import DonateConfirm from './DonateConfirm';

class VolunteerWork extends Component{
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

    render(){
        let allBody = this.state.body.map(function(body, index) {
            return <li key={index}>{body}<Icon small className="icon-delete">do_not_disturb_on</Icon><hr /></li>
          })
        return(
            <div>

            <Row>
            <Col s={2}>
              
            </Col>
            </Row>
  
            <Row  className="row-div">
              <Row>
                <Col s={8} offset='s2'>
                  <Link to='/volunteerwork'><img className="logo-icon" src="./barcode.png" alt="barcode" /></Link>
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
                <Col s={6} className="button-col">
                  <Link to='/volunteernext'><Button className="button-submit" large waves='light'>Submit</Button></Link>
                </Col>
  
                <Col s={6}  className="button-col">
                  <Button floating large className='red'waves='light' icon='add'
                  onClick={ (event) => this.changeBody(event) }></Button>
                  <p>Add Item</p>
                </Col>
              </Row>
  
            </Row>
          <FooterDonate />
        </div>
        )
    }
}
export default VolunteerWork