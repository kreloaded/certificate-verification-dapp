import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Prizma</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add-certificate" className="nav-link">Add Certificate</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/view-certificate" className="nav-link">View Certificate</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/get-transaction-details" className="nav-link">Get Transaction Details</Link>
                    </li>
                </ul>
            </div>
          </nav>
        )
    }
}

export default Navbar;
