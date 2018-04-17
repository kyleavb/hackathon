import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component{

    render(){

      // if user is volunteer redirect & fill with user component?
      // if user is foodbank redirect to profile - fill with their info
        return(
          <div className="row">
            <div className="col s12">
                <h1>Login Page</h1>
                <form id='signupform' onSubmit  >
                  <input placeholder='Name:' type='text'  /> <br />
                  <input placeholder='Email:' type='text'  /> <br />
                  <input placeholder='Password:' type='password'  /> <br />
                  <div className='btn'>Sign Up</div>
                </form>
            </div>
          </div>
        )
    }
}
export default Login
