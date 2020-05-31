import React, { useState, Component } from "react";
import Modal from 'react-modal';

import Loader from '../loader/Loader';

class ModalClass extends Component {
    componentWillMount() {
        Modal.setAppElement('body');
    }

    render () {
        return (
            <Modal
                isOpen={ true }
                contentLabel="Maximal Modal Example"
            >
                <Loader />
            </Modal>
        );
    }
  }

  export default ModalClass;
