import React from 'react'
import PropTypes from 'prop-types'
import { defaultStyle } from './config'

/**
 * A React component for the circle HTML Tag.
 *
 * @module Text
 * @type {ReactClass}
 */
class Text extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <text
        style={defaultStyle}
        {...this.props}
      >
        {this.props.children}
      </text>
    )
  }
}

Text.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  fill: PropTypes.string,
  fontFamily: PropTypes.object,
  style: PropTypes.object,
  transform: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string,
}

export default Text
