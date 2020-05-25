import React, { Component } from 'react';

import './Failed.css';

class Failed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: props.error,
        }
    }
    render () {
        return (
            <div className="failed">
                <h2>{this.state.errorMessage}</h2>
            </div>
        );
    };
};

export default Failed;
