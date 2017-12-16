// Imports
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import {renderIf} from '../../setup/helpers'
import {menuShow, menuHide, messageHide} from './api/actions'
import Menu from './Menu'

// Component
class Layout extends Component {

  render() {
    const {children} = this.props

    return (
      <div>
        {/* Header */}
        <header>
          {renderIf(this.props.common.menuIsVisible, () => (
            <Menu/>
          ))}

          {/* Header visible toggle button */}
          {
            this.props.common.menuIsVisible
              ?
              <button onClick={this.props.menuHide}>Hide Menu</button>
              :
              <button onClick={this.props.menuShow}>Show Menu</button>
          }
        </header>

        <hr/>

        {/* Message */}
        {renderIf(this.props.common.message.open, () => (
          <div>
            {this.props.common.message.text.map((text, i) => (
              <p key={i}>
                <mark>{text}</mark>
              </p>
            ))}

            <button onClick={this.props.messageHide}>Hide Messages</button>

            <hr/>
          </div>
        ))}

        {/* Page content */}
        <section>
          {children}
        </section>
      </div>
    )
  }
}

// Component Properties
Layout.propTypes = {
  common: PropTypes.object.isRequired,
  menuShow: PropTypes.func.isRequired,
  menuHide: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function commonState(state) {
  return {
    common: state.common
  }
}

export default connect(commonState, {menuShow, menuHide, messageHide})(Layout)