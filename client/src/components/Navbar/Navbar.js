import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Cinemaddicts<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => { 
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button onClick={this.handleClick}>Sign Up</Button> */}
            </nav>
        )
    }
}

const MenuItems = [
    {
        title: 'Profile',
        url: 'profile',
        cName: 'nav-links'
    },
    {
        title: 'Social Feed',
        url: 'socialfeed',
        cName: 'nav-links'
    },
    {
        title: 'Recommendations',
        url: 'recommendations',
        cName: 'nav-links'
    },
    {
        title: 'Sign Up',
        url: 'signup',
        cName: 'nav-links'
    },
    {
        title: 'Rate Movies',
        url: 'ratemovies',
        cName: 'nav-links'
    }
]
export default Navbar;