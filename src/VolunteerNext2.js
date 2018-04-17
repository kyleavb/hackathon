import React,{Component} from 'react'
import {Row, Col, Icon, Button} from 'react-materialize';
import { Link } from 'react-router-dom';


class VolunteerNext2 extends Component{

    render(){
        return(
          <div className="row">
            <div className="col s12">

              <div className='main-map'>
              <div className='col s3 offset-s9'>

              </div>
                  <h2>Route 1</h2>
                  <img className='map-img' src='./hero2.png' alt='Map 1'/>

                  <table>
                      <thead>
                      <tr>
                          <th></th>
                          <th>Items</th>
                          <th>Pickup Location</th>
                          <th></th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr>
                          <td></td>
                          <td>Avacodo</td>
                          <td>730 14th Ave</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Canned Tomatoes</td>
                          <td>730 14th Ave</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Tinned Achovies</td>
                          <td>730 14th Ave</td>
                      </tr>
                      </tbody>
                  </table>
                  </div>

            </div>
          </div>

        )
    }
}
export default VolunteerNext2
