import React,{Component} from 'react'
import {Row, Col, Icon, Button} from 'react-materialize';
import { Link } from 'react-router-dom';

class VolunteerNext extends Component{

    render(){
        return(
          <div className="row">
            <div className="col s12">

              <div className='main-map'>
              <div className='col s3 offset-s9'>
              <Link to='/Volunteerwork'><Button floating large className='red'waves='light' icon='arrow_forward'>
              </Button></Link>
              </div>
                <h2>Proceed to Donation site</h2>
                <img className='map-img' src='./hero1.png' alt='Map 1'/>
                </div>
            </div>
          </div>

        )
    }
}
export default VolunteerNext
