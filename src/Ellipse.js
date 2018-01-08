import React from 'react'
import PropTypes from 'prop-types'
import { defaultStyle } from './config'

/**
 * A React component for the circle HTML Tag.
 *
 * @module Ellipse
 * @type {ReactClass}
 */
class Ellipse extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <ellipse
        style={defaultStyle}
        {...this.props}
      >
        {this.props.children}
      </ellipse>
    )
  }
}

Ellipse.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  cx: PropTypes.string,
  cy: PropTypes.string,
  fill: PropTypes.string,
  rx: PropTypes.string,
  ry: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  style: PropTypes.object,
}

export default Ellipse
