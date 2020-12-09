import emailjs from "emailjs-com"
import apiKeys from "../apiKeys"
import React from 'react';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { updateState } from '../actions/index'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form'
import { withRouter } from 'react-router-dom';

const EmailForm = (props) => {
    const onSubmit=(e)=>{
        e.preventDefault()// Prevents default refresh by the browser
        emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
        .then(result => {
            alert('Message Sent, I\'ll get back to you shortly', result.text);
        },
        error => {
            alert( 'An error occured, Plese try again',error.text)
        })
    }

    return (
        <Container>
            <Header>Contact Us</Header>
            <StyledForm className="form" onSubmit = {onSubmit}>
                <Form.Group>
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control name="subject" type="text" placeholder="Subject…" className="form__input" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control name="message" placeholder="Your Message…" className="form__input-message" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group hidden={true}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={props.formState.email} name="from_name" />
                </Form.Group>
                <ButtonRow>
                    <StyledButton variant="secondary" onClick={e=>{props.history.push('/user')}} size="lg">
                        Cancel
                    </StyledButton>
                    <StyledButton variant="primary" size="lg" type="submit">
                        Send Email
                    </StyledButton>
                </ButtonRow>
            </StyledForm>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {formState: state.formState}
}

const StyledForm = styled(Form)`
    display: flex;
    align-items: stretch;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
`

const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
`

const Header = styled.h1`
   padding-top: 20px;
`

const StyledButton = styled(Button)`
    margin-top: 30px;
`

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-box-shadow: 0px 0px 25px -1px rgba(84,84,84,0.36);
    -moz-box-shadow: 0px 0px 25px -1px rgba(84,84,84,0.36);
    box-shadow: 0px 0px 25px -1px rgba(84,84,84,0.36);
    border-radius: 10px 10px 10px 10px;
    padding: 30px;
`


export default connect(mapStateToProps,{ updateState })(withRouter(EmailForm))