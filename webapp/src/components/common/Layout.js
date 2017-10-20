// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import { renderIf } from '../../setup/helpers'
import { menuShow, menuHide } from './api/actions'
import Header from './Header'

// Component
class Layout extends Component {

    render() {
        const { children } = this.props

        return(
            <div>
                <header>
                    {/* Header */}
                    { renderIf(this.props.common.menuIsVisible, () => (
                        <Header />
                    )) }

                    {/* Header visible toggle button */}
                    {
                        this.props.common.menuIsVisible
                            ?
                        <button onClick={ this.props.menuHide }>Hide Menu</button>
                            :
                        <button onClick={ this.props.menuShow }>Show Menu</button>
                    }
                </header>

                <hr />

                {/* Page content */}
                <section>
                    { children }
                </section>
            </div>
        )
    }
}

// Component Properties
Layout.propTypes = {
    common: PropTypes.object.isRequired,
    menuShow: PropTypes.func.isRequired,
    menuHide: PropTypes.func.isRequired
}

// Component State
function commonState(state) {
    return {
        common: state.common
    }
}

export default connect(commonState, { menuShow, menuHide })(Layout)