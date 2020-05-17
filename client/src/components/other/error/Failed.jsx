import React, { Component } from 'react';

import './Failed.css';

class Failed extends Component {
    render () {
        return (
            <div className="failed">
                <h2>Loading Blockchain Failed ! </h2>
                <h3>Currently only connection through metamask is supported.</h3>
                <h3>Please check your metamask is active and connected ! </h3>
            </div>
        );
    };
};

export default Failed;
