import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss';

class Header extends Component {
  render() {
    return (
        <header>
            <div>
                <div className="logo">
                    <NavLink to="/">LOGO</NavLink>
                </div>
                
                <nav>
                    <ul>
                        <li><NavLink to="/#" activeClassName="selected">ABOUT</NavLink></li>
                        <li><NavLink to="/#" activeClassName="selected">DONATE</NavLink></li>
                        <li><NavLink to="/#" activeClassName="selected">CONTACT</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;