import React from 'react'
import PropTypes from 'prop-types'

const Nav = () => {
    return (
        <>
            <ul>
                <li>All items</li>
                <li>Category One</li>
                <li>Category Two</li>
                <li>Langauge</li>
                <div>
                    Cart
                </div>
            </ul>
        </>
    )
}

Nav.propTypes = {
    history: PropTypes.object,
}

export default Nav


