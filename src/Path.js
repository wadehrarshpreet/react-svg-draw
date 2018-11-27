import React from 'react'
import PropTypes from 'prop-types'
import {defaultStyle} from './config'

/**
 * A React component for the circle HTML Tag.
 *
 * @module Path
 * @type {ReactClass}
 */
class Path extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <path style={defaultStyle} {...this.props}>
                {this.props.children}
            </path>
        )
    }
}
Path.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.array
    ]),
    className: PropTypes.string,
    d: PropTypes.string,
    fill: PropTypes.string,
    markerEnd: PropTypes.string,
    markerMid: PropTypes.string,
    markerStart: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.string,
    style: PropTypes.object
}

export default Path
