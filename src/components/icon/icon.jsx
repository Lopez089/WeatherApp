import React from 'react'
import './icon.css'

export const Icon = ({ icon, onClick }) => {
  return (
    <span
      className="material-icons"
      onClick={onClick}
    >
      {icon}
    </span>
  )
}
