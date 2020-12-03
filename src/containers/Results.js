import React, {useState} from 'react';
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'


const Results = (props) => {
    const [state] = useState(props)
    return (
        <div>
            <h1>Congratulations! You have successfully registered. </h1>
            <div>
                Name: {state.title}{state.fullName}
            </div>
            <div>
                Email: {state.email}
            </div>
        </div>
    )
}

const selector = formValueSelector('miniForm') // <-- same as form name
export default connect(state => {
  const email = selector(state, 'email')
  const phoneNumber = selector(state, 'phoneNumber')
  const title = selector(state, 'title')
  const { firstName, lastName } = selector(state, 'firstName', 'lastName')
  return {
    email,
    phoneNumber,
    title,
    fullName: `${firstName || ''} ${lastName || ''}`
  }
})(Results)