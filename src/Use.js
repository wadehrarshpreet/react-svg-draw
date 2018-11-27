import React from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the SVG HTML Tag.
 *
 * @module Use
 * @type {ReactClass}
 */
class Use extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <use {...this.props}>
                {this.props.children}
            </use>
        )
    }
}

Use.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.array
    ]),
    className: PropTypes.string,
    style: PropTypes.object,
    x: PropTypes.string,
    xlinkHref: PropTypes.string,
    y: PropTypes.string
}

export default Use
