import React from 'react'
import PropTypes from 'prop-types'


/**
 * A React component for the SVG HTML Tag.
 *
 * @module Image
 * @type {ReactClass}
 */
class Image extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <image
        {...this.props}
      >
        {this.props.children}
      </image>
    )
  }
}

Image.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  x: PropTypes.string,
  xlinkHref: PropTypes.string,
  y: PropTypes.string,
}

export default Image
