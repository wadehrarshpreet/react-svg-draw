import React from 'react'
import PropTypes from 'prop-types'


/**
 * A React component for the SVG HTML Tag.
 *
 * @module Animate
 * @type {ReactClass}
 */
class Animate extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <animate
        {...this.props}
      >
        {this.props.children}
      </animate>
    )
  }
}

Animate.propTypes = {
  attributeName: PropTypes.string,
  attributeType: PropTypes.string,
  begin: PropTypes.string,
  children: PropTypes.object,
  dur: PropTypes.string,
  fill: PropTypes.string,
  from: PropTypes.string,
  repeatCount: PropTypes.string,
  to: PropTypes.string,
}

export default Animate
