import React from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the circle HTML Tag.
 *
 * @module TSpan
 * @type {ReactClass}
 */
class TSpan extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <tspan
        {...this.props}
      >
        {this.props.children}
      </tspan>
    )
  }
}

TSpan.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  dx: PropTypes.string,
  dy: PropTypes.string,
  style: PropTypes.object,
  x: PropTypes.string,
  y: PropTypes.string,
}

export default TSpan
