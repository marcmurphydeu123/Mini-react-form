import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateState } from '../actions/index'
import InputField from '../components/InputField';
import styled from 'styled-components';
import Dropdown from '../components/Dropdown';


const MiniForm = (props) => {

    // Set up state hook
    const [errors, setErros] = useState([]) 

    // Update the state with the new input value
    const handleInputChange = (e) => {
        let id = e.target.id 
        let value = e.target.value
        props.updateState(id, value)
    }

    // Update the state with the dropdown value
    const handleDropDownChange = (e) => {
        let id = "title"
        let value = e.target.innerText
        props.updateState(id, value)
    }

    // Navigate to next page if there's no erros
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (checkValidity()){
            props.history.push('/confirmation')
        }
    }

    // A list of the options displayed in the dropdown
    const dropDownOptions = [
        { key: 'Mr.', value: 'Mr.', text: 'Mr.' },
        { key: 'Mrs.', value: 'Mrs.', text: 'Mrs.' },
        { key: 'Miss.', value: 'Miss.', text: 'Miss.' },
        { key: 'Sir.', value: 'Sir.', text: 'Sir.' },
      ]

    // An initial list containing the inputs for the Form
    const formSetup = [
        {
            size: 6,
            id: "firstName",
            label: "First Name *",
            type: "text"
        },
        {
            size: 6,
            id: "middleName",
            label: "Middle Name (optional)",
            type: "text"
        },
        {
            size: 6,
            id: "lastName",
            label: "Last Name *",
            type: "text"
        },
        {
            size: 6,
            id: "email",
            label: "Email *",
            type: "email"
        },
        {
            size: 6,
            id: "phoneNumber",
            label: "Phone Number (optional)",
            type: "tel"
        },
    ]

    const requierdFields = ['firstName', 'lastName', 'email', 'title']

    // Validate the form inputs
    const checkValidity = () => {
        let errors = []
        let isEmpty = Object.keys(props.formState).length === 0
        console.log(props.formState)
        requierdFields.forEach(field => {
            if ((props.formState[field] === (''|| undefined )) || isEmpty ){
                errors.push(field)
            }
        })
        setErros(errors)
        return errors.length ? false : true;
    }

    return (
            <Container>
                <Header>Mini Form</Header>
                <StyledForm style={{margin:20}}>

                    {/* Dropdown */}
                    <Col xs={6}>
                        <StyledDropdown label="Title *" 
                                        error = {errors.includes("title") ? true:false} 
                                        id="title" 
                                        placeholder="Select your title" 
                                        options={dropDownOptions} 
                                        handleChange ={handleDropDownChange} />
                    </Col>

                    {/* Input fields */}
                    {formSetup.map(formElement =>{
                        return (
                                <Col key={formElement.id} xs={formElement.size}>
                                    <InputField id={formElement.id}
                                                label={formElement.label}
                                                key={formElement.id}
                                                defaultValue={props.formState[formElement.id]}
                                                onChange={(e)=> handleInputChange(e)}
                                                isInvalid={errors.includes(formElement.id) ? true:false} 
                                                type={formElement.type} />
                                </Col>
                        )
                    })}

                </StyledForm>
                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>
            </Container>
    )
}

const mapStateToProps = (state) => {
    return {formState: state.formState}
}

const StyledForm = styled(Form)`
    height: 100%;
    display: flex;
    align-items: center;
    align-content: space-evenly;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`

const Header = styled.h1`
   padding-top: 20px;
`

const StyledDropdown = styled(Dropdown)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

const Container = styled.div`
    position: absolute;
    left: 50%;
    height: 600px;
    top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    justify-content: flex-start;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-box-shadow: 0px 0px 25px -1px rgba(84,84,84,0.36);
    -moz-box-shadow: 0px 0px 25px -1px rgba(84,84,84,0.36);
    box-shadow: 0px 0px 25px -1px rgba(84,84,84,0.36);
    border-radius: 10px 10px 10px 10px;
    padding: 30px;
`


export default connect(mapStateToProps,{ updateState })(withRouter(MiniForm))