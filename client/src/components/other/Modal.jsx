import React from 'react'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  function ModalComponent(){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }

    function closeModal(){
      setIsOpen(false);
    }

      return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div>Transaction is successfull !</div>
            <br />
            <button onClick={closeModal}>close</button>
          </Modal>
        </div>
      );
  }

  export default ModalComponent;
