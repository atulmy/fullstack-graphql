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

        console.log(this.state)
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
                        name="name"
                        placeholder="Your name"
                        required="required"
                        onChange={ this.onChange }
                    />

                    <br /><br />

                    <textarea
                        name="thought"
                        placeholder="Your thought"
                        required="required"
                        onChange={ this.onChange }
                    />

                    <br /><br />

                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default Create