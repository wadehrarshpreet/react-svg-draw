import React from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the circle HTML Tag.
 *
 * @module THref
 * @type {ReactClass}
 */
class THref extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <thref
        {...this.props}
      >
        {this.props.children}
      </thref>
    )
  }
}

THref.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  xlinkHref: PropTypes.string,
}

export default THref
