import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { Col, Row, Form } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'


const MiniForm = (props) => {
    // Set up state hook and dropdown values
    const [errors, setErros] = useState([]) 
    const userTitles = ['Mr.', 'Mrs.', 'Miss.', 'Sir.', 'Dr.']

    // Navigate to next page if there's no erros
    const handleSubmit = (state) =>{
        if (checkValidity(state)){
            props.history.push('/user')
        }
    }

    // Validate the form inputs
    const checkValidity = (state) => {
        let errors = []
        if (!state.firstName){
            errors.push("firstName")
        }
        if (!state.lastName){
            errors.push('lastName')
        }
        if(!state.email){
            errors.push("email")  // There's also a default error check
        }
        setErros(errors)
        return errors.length ? false : true;
    }


    // Represents an input field component
    const renderInput = ({input, label})=>{
        return (
            <div className="field">
                <Form.Label>{label}</Form.Label>
                <Form.Control id={label} 
                                {...input}
                                isInvalid = {errors.includes(input.name) ? true: false }
                                type="text"/>
            </div>
        )
    }

    // Render the dropdown
    const RenderDropdown = () => {
        return (
            <div>
                <label>Title</label>
                <div>
                <Field name="title" component="select">
                    {userTitles.map(title=> {
                        return (<option value={title}>{title}</option>)
                    })}
                </Field>
                </div>
            </div>
        )
    }

    return (
            <Form style={{margin:20}} onSubmit={props.handleSubmit(handleSubmit)}>

                <Row style ={{marginTop: 10}}>
                    <Col xs={3}>
                        <RenderDropdown/>
                    </Col>
                    <Col xs={3}>
                        <Field name = "firstName" component ={renderInput} label="First Name *" />
                    </Col>
                </Row>
                <Row style ={{marginTop: 10}}>
                    <Col xs={3}>
                        <Field name = "middleName" component ={renderInput} label="Middle Name (optional)" />
                    </Col>
                    <Col xs={3}>
                        <Field name = "lastName" component ={renderInput} label="Last Name *" />
                    </Col>
                </Row>
                <Row style ={{marginTop: 10}}>
                    <Col xs={6}>
                        <Field name = "email" component ={renderInput} label="Email *" />
                    </Col>
                </Row>
                <Row style ={{marginTop: 10}}>
                    <Col xs={6}>
                        <Field name = "phoneNumber" component ={renderInput} label="Phone Number (optional)" />
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

export default reduxForm({
    form: 'miniForm'
})(withRouter(MiniForm))