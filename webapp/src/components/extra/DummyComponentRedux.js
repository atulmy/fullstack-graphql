// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports

// Component
class DummyComponentRedux extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h1>Dummy Component Redux</h1>
            </div>
        )
    }
}

// Component Properties
DummyComponentRedux.propTypes = {
    dummyId: PropTypes.number.isRequired
}

// Component State
function dummyComponentReduxState(state) {
    return state
}

export default connect(dummyComponentReduxState, {})(DummyComponentRedux)