import Contact from './Contact'
import About from './About'
import styles from '../styles/index.module.css';
import CanvasModule from './CanvasModule';
import { useTrail, a } from '@react-spring/web';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Projects from './Projects';


const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 2, tension: 30, friction: 30},
    opacity: open ? 1 : 0,
    x: open ? 0 : 40,
   
    from: { opacity: 0, x: 50, height: 30 },
    delay: 6900
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.headline} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default function Headline() {
  const [open, setOpen] = useState(true)
window.addEventListener('mousedown', (e) => e.preventDefault())
const [page, setPage] = useState('home')

const greeting = useSpring({ to: {  opacity: '0'}, from: { opacity: '1'},  delay: 5500,  });
const line4 = useSpring({ to: {  opacity: '1'}, from: { opacity: '0'},  delay: 10000,  });


  return(

      <CanvasModule  >
       

    
          <nav style={{position: 'absolute', zIndex: 224}}>
          <a onClick={()=> setPage('home')}>Home</a>
          <a onClick={()=> setPage('about')}>About</a>
          <a onClick={()=> setPage('contact')}>Contact</a>
        </nav>
          {page === 'home' && <><animated.div
        style={greeting}>
        <h1 className={styles.greeting} onClick={() => { setOpen(false); } } style={{
          position: 'absolute', zIndex: '300', display: 'block',
          left: '0', right: '0', marginTop: '250px'
        }}>Hello</h1>
      </animated.div><div className={styles.container}>
          <Trail open={open}>
            <h2 style={{ marginTop: '-95px' }}>My name is</h2>
            <h1 style={{ marginTop: '-42px' }}>Ryan Hartley</h1>
            <h3 style={{ marginTop: '25px' }}>I'm a Front End Designer & Developer</h3>

          </Trail>
          <animated.div style={line4} className={styles.headline}>
            <div className={styles.links}>
              <a onClick={() => setPage('projects')}>Projects</a>
              <a onClick={() => setPage('about')}>About</a>
              <a onClick={() => setPage('contact')}>Contact</a>
           
            </div>
            <div className={styles.direction}>
              <p>Please scroll around and enjoy the view</p>
            </div>
          </animated.div>
        </div></>
     }
     {page === 'projects' && <Projects home={() => setPage('home')}/>}
     {page === 'about' && <About />}
     {page === 'contact' && <Contact />}
  
      </CanvasModule>
  )
}