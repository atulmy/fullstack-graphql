// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {get} from './api/actions'
import Loading from '../common/Loading'

// Component
class View extends Component {

  componentDidMount() {
    this.props.get(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h1>Thought</h1>

        <p>
          <Link to={routes.thoughts.list}>Back</Link>
        </p>

        {/* Single thoughts */}
        {
          this.props.thought.isLoading
            ?
            <Loading message="loading thought details..."/>
            :
            (
              this.props.thought.item.id > 0
                ?
                <div>
                  <h1>"{this.props.thought.item.thought}"</h1>
                  <h4> - {this.props.thought.item.name}</h4>
                </div>
                :
                <p>Thought does not exists.</p>
            )
        }
      </div>
    )
  }
}

// Component Properties
View.propTypes = {
  thought: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
}

// Component State
function viewState(state) {
  return {
    thought: state.thought
  }
}

export default connect(viewState, {get})(View)