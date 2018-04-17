import React,{Component} from 'react'
import {Row, Col, Icon, Button} from 'react-materialize';
import { Link } from 'react-router-dom';


class VolunteerNext3 extends Component{

    render(){
        return(
          <div className="row">
            <div className="col s12">

              <div className='main-map'>
              <div className='col s3 offset-s9'>

              </div>
                  <h2>Stop 2</h2>
                  <img className='map-img' src='./hero3.png' alt='Map 1'/>
                    <h2>Please Proceed to Food Bank @ St.Mary's</h2>
                    <hr />
                    <h5>Items to be dropped off</h5>
                  <table>
                  
                      <thead>
                      <tr>
                          <th></th>
                          <th>Items</th>
                          <th>Qty.</th>

                      </tr>
                      </thead>

                      <tbody>
                      <tr>
                          <td></td>
                          <td>Avacodo</td>
                          <td>5</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Canned Tomatoes</td>
                          <td>30</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Tinned Achovies</td>
                          <td>10</td>
                      </tr>
                      </tbody>
                  </table>
                  </div>
                <Link className='btn' to='/'>Complete Route</Link>
            </div>
          </div>

        )
    }
}
export default VolunteerNext3