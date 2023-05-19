import { useState } from 'react'
import './nav.css'
import PropTypes from 'prop-types'


export const Nav = ({ searchs }) => {
    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <nav>
                <div className='nav '>
                    <h1>Weather App</h1>
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
                                {searchs.map(search => <li key={searchs.lenght + 1}>{search}</li>)}
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

//TODO 
// que el usuario le de click a los resutado y lo vuelva a buscar
