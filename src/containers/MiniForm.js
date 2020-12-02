import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { Col, Row, Form } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateState } from '../actions/index'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from '../components/Dropdown';

const MiniForm = (props) => {

    // Set up state hook
    const [errors, setErros] = useState([]) 

    // Update the state with the new input value
    const handleChange = (e) => {
        let id = e.target.id 
        let value = e.target.value
        props.updateState(id, value)
    }

    // Navigate to next page if there's no erros
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (checkValidity()){
            props.history.push('/user')
        }
    }

    // Validate the form inputs
    const checkValidity = () => {
        let errors = []
        if (props.formState.firstName === ''){
            errors.push("firstName")
        }
        if (props.formState.lastName === ''){
            errors.push('lastName')
        }
        if(props.formState.email === ''){
            errors.push("email")  // There's also a default error check
        }
        setErros(errors)
        return errors.length ? false : true;
    }

    return (
            <Form style={{margin:20}} onSubmit={(e) => handleSubmit(e)}>
                <Row style ={{marginTop: 10}}>
                    <Col xs={3}>
                        <Form.Label>Title *</Form.Label>
                        <Dropdown updateState = {props.updateState} />
                    </Col>
                    <Col xs={3}>
                        <Form.Label>First Name * </Form.Label>
                        <Form.Control id="firstName" 
                                      onChange={(e)=> handleChange(e)} 
                                      isInvalid = {errors.includes("firstName") ? true: false }
                                      type="text"/>
                    </Col>
                </Row>
                <Row style ={{marginTop: 10}}>
                    <Col xs={3}>
                        <Form.Label>Middle Name (optional)</Form.Label>
                        <Form.Control id="middleName" 
                                      onChange={(e)=> handleChange(e)} 
                                      type="text"/>
                    </Col>
                    <Col xs={3}>
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control isInvalid = {errors.includes("lastName") ? true: false }
                                      id="lastName" 
                                      onChange={(e)=> handleChange(e)} 
                                      type="text"/>
                    </Col>
                </Row>
                <Row style ={{marginTop: 10}}>
                    <Col xs={6}>
                            <Form.Label>Email address *</Form.Label>
                            <Form.Control id="email" 
                                          onChange={(e)=> handleChange(e)} 
                                          type="email" 
                                          placeholder="Enter email" 
                                          isInvalid = {errors.includes("email") ? true: false } />
                    </Col>
                </Row>
                <Row style ={{marginTop: 10}}>
                    <Col xs={6}>
                        <Form.Label>Phone Number (optional) </Form.Label>
                        <Form.Control id="phoneNumber" onChange={(e)=> handleChange(e)} type="tel"/>
                    </Col>
                </Row>
                <Row style ={{marginTop: 10}}>
                    <Col>
                        <Button variant="primary" type="submit">
                                    Submit
                        </Button>
                    </Col>
                    
                </Row>
                
                
            </Form>
    )
}

const mapStateToProps = (state) => {
    return {formState: state.formState}
}

export default connect(mapStateToProps,{ updateState })(withRouter(MiniForm))