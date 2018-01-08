import React from 'react'
import PropTypes from 'prop-types'


/**
 * A React component for the SVG HTML Tag.
 *
 * @module G
 * @type {ReactClass}
 */
class G extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <g
        {...this.props}
      >
        {this.props.children}
      </g>
    )
  }
}

G.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default G
