import React from 'react'
import PropTypes from 'prop-types'


/**
 * A React component for the SVG HTML Tag.
 *
 * @module A
 * @type {ReactClass}
 */
class A extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <a
        {...this.props}
      >
        {this.props.children}
      </a>
    )
  }
}

A.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  xlinkHref: PropTypes.string,
}

export default A
