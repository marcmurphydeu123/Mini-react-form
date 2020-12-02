import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    let state = props.result
    console.log("TITLE", state.title)
    return (
        <div>
            <h1>Congratulations! You have successfully registered. </h1>
            <div>
                Name: {state.title}{state.firstName} {state.lastName}
            </div>
            <div>
                Email: {state.email}
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return ({result: state.formState})
}

export default connect(mapStateToProps)(Results)