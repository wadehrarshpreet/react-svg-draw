import React from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the SVG HTML Tag.
 *
 * @module Defs
 * @type {ReactClass}
 */
class Defs extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <defs
        {...this.props}
      >
        {this.props.children}
      </defs>
    )
  }
}

Defs.propTypes = {
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.array
    ]),
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Defs
