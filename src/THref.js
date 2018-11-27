import React from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the circle HTML Tag.
 *
 * @module THref
 * @type {ReactClass}
 */
class THref extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <thref {...this.props}>
                {this.props.children}
            </thref>
        )
    }
}

THref.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.array
    ]),
    className: PropTypes.string,
    style: PropTypes.object,
    xlinkHref: PropTypes.string
}

export default THref
