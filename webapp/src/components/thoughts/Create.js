// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import { create } from './api/actions'

// Component
class Create extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            thought: ''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault()

        this.props.create(this.state)
    }

    render() {
        return(
            <div>
                <h1>Thought Create</h1>

                <p>
                    <Link to={ routes.thoughts.list }>Cancel</Link>
                </p>

                {/* Form */}
                <form onSubmit={ this.submit }>
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required="required"
                        onChange={ this.onChange }
                    />

                    <br /><br />

                    {/* Thought */}
                    <textarea
                        name="thought"
                        placeholder="Your thought"
                        required="required"
                        onChange={ this.onChange }
                    />

                    <br /><br />

                    {/* Submit */}
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

// Component Properties
Create.propTypes = {
    create: PropTypes.func.isRequired,
}

export default connect(null, { create })(Create)