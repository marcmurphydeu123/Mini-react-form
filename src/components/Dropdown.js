import React from 'react';
import { Select } from 'semantic-ui-react'
import { Form } from "react-bootstrap";
import styled from 'styled-components';


const Dropdown = (props) => {
   return (
        <StyledDropdown>
            <Form.Label>{props.label}</Form.Label>
            <Select placeholder={props.placeholder} onChange={e=>props.handleChange(e)} error={props.error} options={props.options} />
        </StyledDropdown>
    )
}


const StyledDropdown = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`


export default Dropdown