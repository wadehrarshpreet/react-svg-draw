import React from 'react'
import PropTypes from 'prop-types'
import { defaultStyle } from './config'

/**
 * A React component for the circle HTML Tag.
 *
 * @module Line
 * @type {ReactClass}
 */
class Line extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <line
        style={defaultStyle}
        {...this.props}
      >
        {this.props.children}
      </line>
    )
  }
}

Line.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  style: PropTypes.object,
  x1: PropTypes.string,
  x2: PropTypes.string,
  y1: PropTypes.string,
  y2: PropTypes.string,
}

export default Line
