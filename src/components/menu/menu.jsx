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