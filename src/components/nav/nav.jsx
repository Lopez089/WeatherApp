import { useState } from 'react'
import './nav.css'
import { Logo, Menu } from '../index'
import PropTypes from 'prop-types'
import { handleSearch } from "../../utils/handleSearch"
import { useSpring, animated } from '@react-spring/web'






export const Nav = ({ searchs, onSearch }) => {


    return (
        <>
            <nav>
                <div className='nav container'>
                    <Logo />

                </div>

                <Menu showNav={showNav}>
                </Menu>

            </nav >
        </>
    )
}

Nav.propTypes = {
    searchs: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string,
        unit: PropTypes.string,
        id: PropTypes.string,
    })),
}
