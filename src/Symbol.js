import React from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the SVG HTML Tag.
 *
 * @module Symbol
 * @type {ReactClass}
 */
class Symbol extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <symbol
        {...this.props}
      >
        {this.props.children}
      </symbol>
    )
  }
}

Symbol.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
}

export default Symbol
