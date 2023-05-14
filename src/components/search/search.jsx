import { useState } from 'react'
import { handleSearch } from "../../utils/handleSearch"

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
                placeholder="ej: Madrid"
                onChange={(e) => { handleChange(e, setLocation) }}
            />
            <button type="submit">Search</button>
        </form>
    )
}