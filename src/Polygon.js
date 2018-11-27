import React from 'react'
import PropTypes from 'prop-types'
import { defaultStyle } from './config'

/**
 * A React component for the circle HTML Tag.
 *
 * @module Polygon
 * @type {ReactClass}
 */
class Polygon extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <polygon style={defaultStyle} {...this.props}>
                {this.props.children}
            </polygon>
        )
    }
}

Polygon.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.array
    ]),
    className: PropTypes.string,
    points: PropTypes.string,
    style: PropTypes.object
}

export default Polygon
