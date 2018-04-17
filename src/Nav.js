import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize'

class Nav extends Component{

    render(){
        return(
            <div>
				        <nav>
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo">HackSite</a>
                    <ul id="nav-mobile" class="Left hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/donate'>Donate</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                        <li><Link to='/volunteer'>Volunteer</Link></li>
                    </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
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
