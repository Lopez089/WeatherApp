import { useState } from 'react'
import { handleSearch } from "../../utils/handleSearch"
import './search.css'

const handleChange = (e, setLocation) => {
    const value = e.target.value
    const event = e.target.id
    setLocation(oldState => ({ ...oldState, [event]: value }))
}

export const Search = ({ onSearch }) => {
    const [location, setLocation] = useState({
        city: 'madrid',
        unit: 'celsius'
    })
    return (
        <form onSubmit={(e) => handleSearch(e, location, onSearch)}>
            <input
                type="text"
                name="search"
                id="city"
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
            <select id='unit' onChange={(e) => handleChange(e, setLocation)}>
                <option id='celsius' name='celsius' value="celsius">Celsius</option>
                <option id='fahrenheit' name='fahrenheit' value="fahrenheit">Fahrenheit</option>
            </select>
        </form>
    )
}