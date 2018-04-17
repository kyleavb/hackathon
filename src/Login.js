import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      type: ''
    }
    this.radioChange = this.radioChange.bind(this)
  }
  nameChange(e){
    this.setState({
      name: e.target.value
    })
    console.log(this.state.name)
  }
  radioChange(e){
    this.setState({
      type: e.target.value
    })
  }
    render(){
      // if user is volunteer redirect & fill with user component?
      // if user is foodbank redirect to profile - fill with their info
      if(this.state.type === 'donator'){
        var formField =
        <div className="col s12">
            <form id='signupform'>
              <input placeholder='Name:' type='text'  /> <br />
              <input placeholder='Email:' type='text'  /> <br />
              <input placeholder='Password:' type='password'  /> <br />
              <Link to='/profile' className='btn btn-donator'>Sign Up</Link>
            </form>
        </div>
      }else if(this.state.type === 'volunteer'){
        var formField =
        <div className="col s12">
          <form id='signupform'>
                <input placeholder='Name:' type='text' /> <br />
                <input placeholder='Email:' type='text'  /> <br />
                <input placeholder='Password:' type='password'  /> <br />
                <Link to='/volunteer' className='btn btn-volunteer'>Sign Up</Link>
          </form>
        </div>
      }else if(this.state.type === 'reciever'){
        var formField =
        <div className="col s12">
          <form id='signupform'>
                <input placeholder='Orginization Name:' type='text' /> <br />
                <input placeholder='Contact Email:' type='text'  /> <br />
                <input placeholder='Contact Phone:' type='text'  /> <br />
                <input placeholder='Address:' type='text'  /> <br />
                <input placeholder='Delivery Hours:' type='text'  /> <br />
                <input placeholder='User Name:' type='text'  /> <br />
                <input placeholder='Password:' type='password'  /> <br />
                <Link to='/reciever' className='btn btn-receiver'>Enroll</Link>
          </form>
        </div>
      }


        return(
          <div className="row">
          <h3>Please Select a user type:</h3>
            <label>
              <input name="type" type="radio" value='donator' onChange={this.radioChange} />
              <span>Donator</span>
            </label>

            <label>
              <input name="type" type="radio" value='volunteer' onChange={this.radioChange} />
              <span>Volunteer</span>
            </label>
            <label>
              <input name="type" type="radio" value='reciever' onChange={this.radioChange} />
              <span>Reciever</span>
            </label>
            {formField}
          </div>
        )
    }
}
export default Login
