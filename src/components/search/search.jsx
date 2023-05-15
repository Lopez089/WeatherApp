import { useState } from 'react'
import { handleSearch } from "../../utils/handleSearch"
import './search.css'

const handleChange = (e, setLocation) => {
    const value = e.target.value
    setLocation(value)
}

export const Search = ({ onSearch }) => {
    const [location, setLocation] = useState('madrid')
    return (
        <form onSubmit={(e) => handleSearch(e, location, onSearch)}>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                onChange={(e) => { handleChange(e, setLocation) }}
            />
            <div>
                <button type="submit">
                    <span className="material-icons">
                        search
                    </span>
                </button>
            </div>
        </form>
    )
}