import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react'
import male from '../images/male.jpg'
import female from '../images/female.jpg'
import styled from 'styled-components'

const Results = (props) => {
    let state = props.result
    let fullName = state.title + ' ' + state.firstName + ' ' + state.lastName
    let maleTitles = ['Sir.', 'Mr.']
    const extra = (
        <a>
          <Icon name='phone' />
          {state.phoneNumber}
        </a>
      )
    return (
        <Container>
            <Card
                image={maleTitles.includes(state.title) ? male: female}
                header= {fullName}
                meta={maleTitles.includes(state.title) ? 'Male' : 'Female'}
                description={state.email}
                extra={extra}
            />
        </Container>
        
    )
}


const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`


const mapStateToProps = (state) =>{
    return ({result: state.formState})
}

export default connect(mapStateToProps)(Results)