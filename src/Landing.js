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
                        <h2>Our serivce aims to provide our donators a easy and
                        convienent way to donate unwanted food items to banks in need.
                        Our system handles three types of users: donators, volunteers, and
                        recievers.  Our demo will provide a example how our system will
                        work to help distrubute food to those in need.</h2>
                        <br />
                    </section>
                    <h2>Please Click on a user experience below to get started</h2>
                    <br />
                    <Link to='/login' className='btn experiance-btn btn-donator'> Donator Experience</Link>
                    <br />
                    <br />
                    <Link to='/volunteer' className='btn experiance-btn btn-volunteer'>Volunteer Experience</Link>
                    <br />
                    <br />
                    <Link to='/reciever' className='btn experiance-btn btn-receiver'>Reciever Experience</Link>
                </div>
            </div>
        )
    }
}

export default Landing
