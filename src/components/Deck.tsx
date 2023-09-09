import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import styles from './styles.module.css'

const cards = [
    
  'https://us.123rf.com/450wm/rashadashurov/rashadashurov1909/rashadashurov190902085/130224019-problem-solving-icon-simple-element-illustration-problem-solving-concept-symbol-design-can-be.jpg?ver=6',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ10-9JIknkTSws4xx_IfsYYKrRbmJZgi0ig&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFCAPKm1XWAetHfQx60ZW9DnzDyQPkUFXKA&usqp=CAU',
  'https://vectorseek.com/wp-content/uploads/2021/12/Express.js-Logo-Vector.jpg',
  'https://t3.ftcdn.net/jpg/04/75/01/42/360_F_475014249_yM9bJgvbwJFpdKJQO9pGrr0FWWCUoR8z.jpg',

  'data:image/png;base64,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',
  'https://www.pngkey.com/png/detail/141-1415392_css3-css-logo-transparent-background.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsA0-jtQNfbeFjPQBX9VWtqx3sOWZyqESu5wRFKNv9N6ctJJZoPjil6Zo3JISSLeEpXoM&usqp=CAU',
  
  'https://mindster.com/mindster-blogs/wp-content/uploads/2020/09/JavaScript.png',
  'https://thumbs.dreamstime.com/b/java-logo-vector-design-commercial-brand-trademark-118452997.jpg',
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  )
}

export default function App() {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  )
}
