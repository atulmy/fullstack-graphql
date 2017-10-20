// Imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'

// Component
class Create extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    submit = (event) => {
        event.preventDefault()
    }

    render() {
        return(
            <div>
                <h1>Thought Create</h1>

                <p>
                    <Link to={ routes.thoughts.list }>Cancel</Link>
                </p>

                <form onSubmit={ this.submit }>
                    <input
                        type="text"
                        placeholder="Your name"
                        required="required"
                    />

                    <br /><br />

                    <textarea
                        placeholder="Your thought"
                        required="required"
                    />

                    <br /><br />

                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default Create