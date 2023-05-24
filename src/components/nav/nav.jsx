import { useState } from 'react'
import './nav.css'
import PropTypes from 'prop-types'
import { handleSearch } from "../../utils/handleSearch"
import { useSpring, animated } from '@react-spring/web'



export const Nav = ({ searchs , onSearch}) => {
    const prop = useSpring({
        from:{
            color: '#fff '
        },
        to:{
            color: '#EC6645'
        },
        config: { 
            duration: 3000,
            tension: 200, 
            friction: 20
        }, 
    })
    
    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <nav>
                <div className='nav container'>
                    <h1 >Weather<animated.span style={prop}>App</animated.span></h1>
                    <span
                        className="material-icons"
                        onClick={() => setShowNav(!showNav)}
                    >
                        {showNav ? 'close' : 'menu'}
                    </span>
                </div>
                
                    <div className={
                        showNav ?
                            'containerSearchHide containerSearch '  :
                            'containerSearchShow containerSearch '

                    }>
                        <h4>Busquedas Anteriores</h4>
                        {
                            searchs ? (
                                <ul>
                                    {searchs.map(location => 
                                    <li 
                                    onClick={(e) => handleSearch(e, location , onSearch)} 
                                    key={location.id}
                                    >
                                        {location.city}
                                    </li>)}
                                </ul>
                                
                            ) :
                                <h5>¡Aún no has realizado ninguna búsqueda! Una vez que realices búsquedas, podrás ver tu historial aquí.</h5>
                        }
                    </div>
                
            </nav >
        </>
    )
}

Nav.propTypes = {
    searchs: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.arrayOf(PropTypes.string),
    ])
}
