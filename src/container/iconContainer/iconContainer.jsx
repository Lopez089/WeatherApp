import React, { useState } from 'react'
import { Icon } from '../../components'

export const IconContainer = () => {
  const [showNav, setShowNav] = useState(false)

  const handleShowNav = (showNav, setShowNav) => {
    setShowNav(!showNav)
  }

  return (
    showNav ?
      <Icon icon='close' onClick={() => handleShowNav(showNav, setShowNav)} />
      :
      <Icon icon='menu' onClick={() => handleShowNav(showNav, setShowNav)} />
  )
}
