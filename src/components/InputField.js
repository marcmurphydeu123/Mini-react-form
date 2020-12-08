import React from 'react';
import { Form } from "react-bootstrap";

// Props: label, id, isInvalid, handleChange, defaultValue
const InputField = ( props ) => {
    return (
        <>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control isInvalid = {props.isInvalid}
                        id={props.id} 
                        onChange={(e)=> props.onChange(e)} 
                        defaultValue= {props.defaultValue}
                        type={props.type}/>
        </>

    )
}

export default InputField