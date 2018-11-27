import React from 'react'
import PropTypes from 'prop-types'
import {defaultStyle} from './config'

/**
 * A React component for the circle HTML Tag.
 *
 * @module Circle
 * @type {ReactClass}
 */
class Circle extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <circle style={defaultStyle} {...this.props}>
                {this.props.children}
            </circle>
        )
    }
}

Circle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.array
    ]),
    className: PropTypes.string,
    cx: PropTypes.string,
    cy: PropTypes.string,
    r: PropTypes.string,
    style: PropTypes.object
}

export default Circle
