import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Dropdown } from 'react-materialize';

class Nav extends Component{

    render(){

        return(
          <div></div>
    )
  }

        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a className="brand-logo">HackSite</a>
                    <ul id="nav-mobile" className="Left hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/donate'>Donate</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                        <li><Link to='/volunteer'>Volunteer</Link></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">Javascript</a></li>
                  <li><a href="mobile.html">Mobile</a></li>
                </ul>
			      </div>
        )
    }
}

export default Nav
