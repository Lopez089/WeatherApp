import React from 'react'
import './itemMenu.css'

export const ItemMenu = ({ onClick, location }) => {
  return (
    <li
      onClick={onClick}
      key={location.id}
    >
      {location.city}
    </li>)
}
