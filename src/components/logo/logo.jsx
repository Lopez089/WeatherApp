import { useSpring, animated } from '@react-spring/web'

export const Logo = () => {

  const animatedTitle = useSpring({
    from: {
      color: '#fff '
    },
    to: {
      color: '#EC6645'
    },
    config: {
      duration: 3000,
      tension: 200,
      friction: 20
    },

  })
  return (
    <h1 >
      Weather
      <animated.span style={animatedTitle}>
        App
      </animated.span>
    </h1>
  )
}