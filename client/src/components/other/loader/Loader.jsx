import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import BeatLoader from 'react-spinners/BeatLoader'

class Loader extends Component {

    render () {
        return (
            <LoadingOverlay
                active={ true }
                spinner={ <BeatLoader /> }
            >
            </LoadingOverlay>
          )
    };
}

export default Loader;
