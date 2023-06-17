import React from 'react'
import { ItemMenu, Menu } from '../../components'

export const MenuSearchContainer = ({ searchs, showNav }) => {
  return (
    <Menu showNav={showNav}>
      <h4>Busquedas Anteriores</h4>
      {
        searchs ?
          searchs.map(search => {
            console.log("🚀 ~ file: menuSearchContainer.jsx:19 ~ MenuSearchContainer ~ search:", search.city)
            return (
              <ItemMenu
                location={search}
                onClick={() => { console.log(fun) }}
                key={search.id}
              />
            )
          })
          :
          <p>¡Aún no has realizado ninguna búsqueda! Una vez que realices búsquedas, podrás ver tu historial aquí.</p>
      }

    </Menu>
  )
}
