// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { thoughtsGetList } from './api/actions'
import { routes } from '../../setup/routes'
import Loading from '../common/Loading'

// Component
class List extends Component {

    componentDidMount() {
        this.props.thoughtsGetList()
    }

    remove = (id) => {
        let check = window.confirm('Are you sure you want to delete this thought?')
        if(check) {
            console.log(id)
        }
    }

    render() {
        return(
            <div>
                <h1>Thoughts</h1>

                <p>
                    <Link to={ routes.thoughts.create }>Create</Link>
                </p>

                {
                    this.props.thoughts.isLoading
                        ?
                    <Loading message="loading thoughts..." />
                        :
                    <ul>
                        { this.props.thoughts.list.map(({ id, thought, name }) => (
                            <li key={ id }>{ thought } - { name } <button onClick={ this.remove.bind(this, id) }>X</button></li>
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