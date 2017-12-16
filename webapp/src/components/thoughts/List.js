// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {getList} from './api/actions'
import Loading from '../common/Loading'
import Item from './Item'

// Component
class List extends Component {

  componentDidMount() {
    this.props.getList()
  }

  render() {
    return (
      <div>
        <h1>Thoughts</h1>

        <p>
          <Link to={routes.thoughts.create}>Create</Link>
        </p>

        {/* List thoughts */}
        {
          this.props.thoughts.isLoading
            ?
            <Loading message="loading thoughts..."/>
            :
            (
              this.props.thoughts.list.length > 0
                ?
                <ul>
                  {this.props.thoughts.list.map(thought => (
                    <li key={thought.id}>
                      <Item thought={thought}/>
                    </li>
                  ))}
                </ul>
                :
                <p>No thoughts to show.</p>
            )
        }
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  thoughts: PropTypes.object.isRequired,
  getList: PropTypes.func.isRequired,
}

// Component State
function thoughtsState(state) {
  return {
    thoughts: state.thoughts
  }
}

export default connect(thoughtsState, {getList})(List)