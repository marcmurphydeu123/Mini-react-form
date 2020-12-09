import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Button } from 'semantic-ui-react'
import male from '../images/male.jpg'
import female from '../images/female.jpg'
import Draggable from 'react-draggable';
import styled from 'styled-components';

const Results = (props) => {
    let state = props.result
    let fullName = state.title + ' ' + state.firstName + ' ' + state.lastName
    let maleTitles = ['Sir.', 'Mr.']
    const extra = (
        <Footer>
            <div>
                <Icon name='phone' />
                {state.phoneNumber}
            </div>
            <Button primary onClick={e=>{props.history.push('/email')}} >
                Contact Us
            </Button>
        </Footer>
      )
    return (
        <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        >
        <Card
            className="handle"
            image={maleTitles.includes(state.title) ? male: female}
            header= {fullName}
            meta={maleTitles.includes(state.title) ? 'Male' : 'Female'}
            description={state.email}
            extra={extra}
        />
      </Draggable>
        
        
    )
}

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    align-items: flex-start;
    justify-content: space-around;
`


const mapStateToProps = (state) =>{
    return ({result: state.formState})
}

export default connect(mapStateToProps)(Results)