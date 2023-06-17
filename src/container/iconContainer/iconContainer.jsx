import React from 'react'

export const IconContainer = ({ showNav, handleSowNav }) => {
  return (
    <span
      className="material-icons"
      onClick={() => handleSowNav(!showNav)}
    >
      {showNav ? 'close' : 'menu'}
    </span>
  )
}
