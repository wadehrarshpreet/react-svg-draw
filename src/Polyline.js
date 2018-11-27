import React from 'react'
import PropTypes from 'prop-types'
import {defaultStyle} from './config'

/**
 * A React component for the circle HTML Tag.
 *
 * @module Polyline
 * @type {ReactClass}
 */
class Polyline extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <polyline style={defaultStyle} {...this.props}>
                {this.props.children}
            </polyline>
        )
    }
}

Polyline.propTypes = {
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

export default Polyline
