import React from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the SVG HTML Tag.
 *
 * @module AnimateTransform
 * @type {ReactClass}
 */
class AnimateTransform extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <animateTransform {...this.props}>
                {this.props.children}
            </animateTransform>
        )
    }
}

AnimateTransform.propTypes = {
    attributeName: PropTypes.string,
    begin: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
        PropTypes.array
    ]),
    dur: PropTypes.string,
    from: PropTypes.string,
    repeatCount: PropTypes.string,
    to: PropTypes.string,
    type: PropTypes.string
}

export default AnimateTransform
