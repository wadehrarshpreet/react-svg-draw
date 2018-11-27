import React from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the SVG HTML Tag.
 *
 * @module SVG
 * @type {ReactClass}
 */
class SVG extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" {...this.props}>
                {this.props.children}
            </svg>
        )
    }
}

SVG.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.array
    ]),
    className: PropTypes.string,
    height: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    style: PropTypes.object,
    viewBox: PropTypes.string,
    width: PropTypes.string,
    x: PropTypes.string,
    y: PropTypes.string
}

export default SVG
