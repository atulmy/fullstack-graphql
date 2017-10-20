// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import { thoughtsGetList } from './api/actions'
import Loading from '../common/Loading'

// Component
class List extends Component {

    componentDidMount() {
        this.props.thoughtsGetList()
    }

    render() {
        return(
            <div>
                <h1>Thoughts</h1>

                {
                    this.props.thoughts.isLoading
                        ?
                    <Loading message="loading thoughts..." />
                        :
                    <ul>
                        { this.props.thoughts.list.map(({ id, thought, name }) => (
                            <li key={ id }>{ thought } - { name }</li>
                        )) }
                    </ul>
                }
            </div>
        )
    }
}

// Component Properties
List.propTypes = {
    thoughts: PropTypes.object.isRequired,
    thoughtsGetList: PropTypes.func.isRequired,
}

// Component State
function thoughtsState(state) {
    return {
        thoughts: state.thoughts
    }
}

export default connect(thoughtsState, { thoughtsGetList })(List)