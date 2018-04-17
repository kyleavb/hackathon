import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
          <div className="row">
            <div className="col s12">
                <h1>Yours 2 Share</h1>
                    <hr />
                    <section>
                        <h4>Our serivce aims to provide our donators a easy and convienent way to donate unwanted food items to banks in need. Our system handles three types of users: donators, volunteers, and recievers.  Our demo will provide a example how our system will work to help distrubute food to those in need.</h4>
                        <br />
                    </section>
                    <h5>Please Click on a User experiance below top get started</h5>
                    <br />
                    <Link to='/login' className='btn experiance-btn btn-donator'> Donator Experiance</Link>
                    <br />
                    <br />
                    <Link to='/volunteer' className='btn experiance-btn btn-volunteer'>Volunteer Experiance</Link>
                    <br />
                    <br />
                    <Link to='/reciever' className='btn experiance-btn btn-receiver'>Reciever Experiance</Link>
                </div>
            </div>
        )
    }
}

export default Landing
