import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

const ConfirmationPage = (props) => {
    let state = props.formValues
    return (
            <Content>
                <Header>Confirm your details </Header>
                <StyledCard>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>Title: </strong> {state.title} </ListGroup.Item>
                        <ListGroup.Item><strong>Name: </strong> {state.firstName} </ListGroup.Item>
                        <ListGroup.Item><strong>Middle Name: </strong> {state.middleName} </ListGroup.Item>
                        <ListGroup.Item><strong>Last Name: </strong> {state.lastName} </ListGroup.Item>
                        <ListGroup.Item><strong>Phone Number: </strong> {state.phoneNumber} </ListGroup.Item>
                        <ListGroup.Item><strong>Email: </strong> {state.email} </ListGroup.Item>
                    </ListGroup>
                </StyledCard>
                <ButtonRow>
                        <Button onClick={() => props.history.push('/')} secondary>Edit</Button>
                        <Button onClick={() => props.history.push('/user')} primary>Submit</Button>
                    </ButtonRow>
            </Content>   
    )
}

const mapStateToProps = (state) =>{
    return ({formValues: state.formState})
}

const ButtonRow = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
`

const Content = styled.div`
    position: absolute;
    width: 50%;
    left: 50%;
    top: 50%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    align-content: space-evenly;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

const Header = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`

const StyledCard = styled(Card)`
    width: 100%;
`


export default connect(mapStateToProps)(withRouter(ConfirmationPage))