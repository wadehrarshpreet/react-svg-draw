import React from 'react'
import PropTypes from 'prop-types'
import {defaultStyle} from './config'

/**
 * A React component for the circle HTML Tag.
 *
 * @module Rect
 * @type {ReactClass}
 */
class Rect extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <rect style={defaultStyle} {...this.props}>
                {this.props.children}
            </rect>
        )
    }
}

Rect.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.array
    ]),
    className: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
    x: PropTypes.string,
    y: PropTypes.string
}

export default Rect
