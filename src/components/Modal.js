import React, {useState} from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import email from '../images/email.png';
import styled from 'styled-components';


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

Modal.setAppElement('body')

function ComponentModal(props){
  

    return (
      <div>
        <Button variant="primary" type="submit" onClick={props.openModal} size="lg">
                        {props.text}
        </Button>
        <Modal
          isOpen={props.modalIsOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <Content>
                <img src={email} height="100" width="100" />
                <h1>Email Sent</h1>
                <h3> We will get back to you as soon as we are can.</h3>
                <StyledButton variant="primary" type="submit" onClick={props.closeModal} size="lg">
                        Okay
                </StyledButton>
            </Content>
        </Modal>
      </div>
    );
}

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledButton = styled(Button)`
    margin-top: 20px;
`

export default ComponentModal