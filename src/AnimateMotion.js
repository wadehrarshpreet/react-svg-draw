import React from 'react'
import PropTypes from 'prop-types'


/**
 * A React component for the SVG HTML Tag.
 *
 * @module AnimateMotion
 * @type {ReactClass}
 */
class AnimateMotion extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <animateMotion
        {...this.props}
      >
        {this.props.children}
      </animateMotion>
    )
  }
}

AnimateMotion.propTypes = {
  begin: PropTypes.string,
  children: PropTypes.object,
  path: PropTypes.string,
  repeatCount: PropTypes.string,
}

export default AnimateMotion
