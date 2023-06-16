import { useSpring, animated } from '@react-spring/web'
import './menu.css'

export const Menu = ({ children, showNav }) => {
  const animatedNav = useSpring({
    display: showNav ? 'flex' : 'none',
    opacity: showNav ? 1 : 0,
    config: {
      duration: 500,
      tension: 200,
      friction: 20
    },
  })
  return (
    <animated.div className='containerMenu container' style={animatedNav}>
      {children}
    </animated.div>
  )
}

// otro component 
//  <h4>Busquedas Anteriores</h4>
// searchs ? (
//   <ul>
//     {searchs.map(location =>
//       <li
//         onClick={(e) => {
//           handleSearch(e, location, onSearch)
//           setShowNav(!showNav)
//         }}
//         key={location.id}
//       >
//         {location.city}
//       </li>)}
//   </ul>

// ) :
//   <h5>¡Aún no has realizado ninguna búsqueda! Una vez que realices búsquedas, podrás ver tu historial aquí.</h5>