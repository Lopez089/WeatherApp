import { useState } from 'react'
import './nav.css'

export const Nav = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <nav>
                <div className='nav'>
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
                        'containerSearchHide containerSearch' :
                        'containerSearchShow containerSearch '

                }>
                    <h4>Busquedas Anteriores</h4>
                    <ul>
                        <li>Barcelona</li>
                        <li>Barcelona</li>
                        <li>Barcelona</li>
                        <li>Barcelona</li>
                    </ul>
                </div>
            </nav >
        </>
    )
}