// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {remove, getList} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class Item extends Component {

  remove = (id) => {
    let check = window.confirm('Are you sure you want to delete this thought?')
    if (check) {
      this.props.messageHide()

      this.props.messageShow('Deleting thought, please wait...')

      this.props.remove({id})
        .then(response => {
          // Refresh thoughts list
          this.props.getList()

          this.props.messageShow('Thought deleted successfully.')
        })
        .catch(error => {
          this.props.messageShow('Error deleting thought. Please try again.')
        })
    }
  }

  render() {
    const {id, name, thought} = this.props.thought

    return (
      <div>
        {thought} - {name}

        &nbsp;&nbsp;

        <Link to={routes.thoughts.view(id)}>
          <button>View</button>
        </Link>

        &nbsp;

        <button onClick={this.remove.bind(this, id)}>Delete</button>
      </div>
    )
  }
}

// Component Properties
Item.propTypes = {
  thought: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, {remove, getList, messageShow, messageHide})(Item)