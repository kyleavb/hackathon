import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Landing from './Landing'
import Nav from './Nav'
import Login from './Login'
import Profile from './Profile'
import Donate from './Donate'
import Signup from './Signup'
import Volunteer from './Volunteer'
import DonateOptions from './DonateOptions'
import DonateBarcode from './DonateBarcode'
import DonateConfirm from './DonateConfirm'
import Reciever from './Reciever'
<<<<<<< HEAD
import FooterDonate from './FooterDonate'
=======
import RecieverProfile from './RecieverProfile'
>>>>>>> 7c80015d460d4468c126050d03d8c396b27e9784



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path ='/' render={() => <Landing />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/donate' render={() => <Donate />} />
          <Route path='/signup' render={() => <Signup />} />
          <Route path='/volunteer' render={() => <Volunteer />} />
          <Route path='/DonateOptions' render={() => <DonateOptions />} />
          <Route path='/DonateBarcode' render={() => <DonateBarcode />} />
          <Route path='/DonateConfirm' render={() => <DonateConfirm />} />
          <Route path='/reciever' render={() => <Reciever />} />
<<<<<<< HEAD
          <FooterDonate />
=======
          <Route path='/recieverprofile' render={() => <RecieverProfile />} />
>>>>>>> 7c80015d460d4468c126050d03d8c396b27e9784
        </div>
      </Router>
    );
  }
}

export default App;
