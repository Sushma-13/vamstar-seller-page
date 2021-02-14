import './Header.css';
import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="navBar">
                <h1 className="navbar-brand">{this.props.heading}</h1>
            </div>
        );
    }
}
export default Header;
