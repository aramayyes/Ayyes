import React from 'react'
import { withTheme } from 'styled-components'
import ReactParticles from 'react-particles-js'

const Particles = ({ className, style, theme }) => {
  return (
    <ReactParticles
      className={className}
      style={style}
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 2600
            }
          },
          color: {
            value: theme.colors.mainWhite
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: theme.colors.mainWhite
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: theme.colors.mainWhite,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            random: true,
            speed: 1,
            direction: 'none',
            out_mode: 'out',
            bounce: true
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            }
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 4
            }
          }
        }
      }}
    />
  )
}

export default withTheme(Particles)
