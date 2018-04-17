import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Volunteer extends Component{
    constructor(props){
        super(props)
        this.state={
            route: '',
            pickup: '',
            stops: ''
        }
        this.take = this.take.bind(this)
    }

    take(){
        this.setState({
            route: 1,
            pickup: '336 27th Ave',
            stops: 3
        })
    }

    render(){
        if(this.state.route){
            var accepted = <tr>
            <td>1</td>
            <td>2.2</td>
            <td>336 27th Ave</td>
            <td>3</td>
            <td><Link to='/volunteerNext' className='btn' >Start</Link></td>
        </tr>
        }
        return(
          <div className="row">
            <div className="col s12">
                <h1>Welcome Volunteer</h1>
                <hr />
                <div className='main-map'>
                    <h4>Available Donation Routes</h4>
                    <img className='map-img' src='./map.png' alt='Main Map'/>
                    <table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>dis.</th>
                            <th>Pickup</th>
                            <th>Stops</th>
                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>2.2</td>
                            <td>336 27th Ave</td>
                            <td>3</td>
                            <td><a className='btn' onClick={this.take}>Accept</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1.9</td>
                            <td>3000 East Howell St</td>
                            <td>3</td>
                            <td><a className='btn'>Accept</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>1.6</td>
                            <td>600 5th Ave</td>
                            <td>3</td>
                            <td><a className='btn'>Accept</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>Accepted Pickups</h4>
                        <table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>dis.</th>
                            <th>Pickup</th>
                            <th>Stops</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {accepted}
                        </tbody>
                        </table>
                    <hr />
                </div>
            </div>
          </div>
        )
    }
}
export default Volunteer
