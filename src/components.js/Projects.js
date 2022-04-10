

import styles from '../styles/projects.module.css';

import CanvasModule from './CanvasModule';
import Navigation from './ui/Navigation';
import { useSpring, animated, easings } from 'react-spring';

 




const Projects = () => {
  const leftIn = useSpring({ to: {  opacity: '1', marginLeft: '3%'}, from: { opacity: '0', marginLeft: '-500'},  config:{duration: 5000, easing: easings.easeOutCirc}});
 

  window.addEventListener('mousedown', (e) => e.preventDefault())

    return(

       
        <CanvasModule >
         
        
         
          <div className={styles.netlify} id='netlify'>
       
        <Navigation title='Projects'/>
       
         <animated.div style={leftIn} className={styles.starBox}>
              <div className={styles.star}>
                <h2>ThreeJs</h2>
                      <a href="https://threejs-landing-page-orion.netlify.app/" target="_blank" rel="noreferrer">3D landing page</a>
                  </div> 
              <div className={styles.star}>
                <h2>ReactJs</h2>
                      <a class='from-top' href="https://appetite-atelier.netlify.app" target="_blank " rel="noreferrer">Appetite Atelier </a>
                      <a href="https://meet-up-react.netlify.app/" target="_blank" rel="noreferrer">Meetups</a>
                      <a class='from-top' href="https://craftbeer-punkapi.netlify.app/" target="_blank" rel="noreferrer">Craft Beer Search - Api  </a>
                      <a class='from-top' href="https://simple-react-image-search.netlify.app" target="_blank" rel="noreferrer"> Image Search</a>
                      <a class='from-top' href="https://youtube-video-search-reach.netlify.app" target="_blank" rel="noreferrer"> Video Search</a>
                      <a class='from-top' href="https://reactjs-expenses-app.netlify.app" target="_blank" rel="noreferrer">Expenses App</a>
                      <a class='from-top' href="https://scoping-styles-in-react.netlify.app/" target="_blank" rel="noreferrer">To Do - Scoping styles</a>
                      
                <h2>React Native</h2>
                  </div> 
              <div className={styles.star}>
                <h2>NextJs</h2>
                      <a class='from-top' href="https://station23-news-prismicio.netlify.app/" target="_blank" rel="noreferrer">Landing page with Prismic.io</a>
                      <a class='from-top' href="https://ionic-landing-page.netlify.app/" target="_blank" rel="noreferrer">Figma to landing page</a>
                      <a class='from-top' href="https://nextjsmeetups.netlify.app/" target="_blank" rel="noreferrer">Meetup App with MongoDB</a>
                  </div>

              <div className={styles.star}>
                <h2>VanillaJs</h2>
                      <a class='from-top' href="https://cine-match-js.netlify.app/" target="_blank" rel="noreferrer">Movie Comparison - OMDBapi</a>
                      <a class='from-top' href="https://thebankapp.netlify.app" target="_blank" rel="noreferrer"> Functional Programming</a>
                                <a class='from-top' href="https://bankist-marketing-app.netlify.app" target="_blank" rel="noreferrer"> DOM Manipulation</a>
                        
                <h2>M-V-C</h2>
                     <a class='from-top' href="https://forkify-mvc-recipe.netlify.app/" target="_blank" rel="noreferrer">Recipes</a>
                  </div>
              <div className={styles.star}>
                <h2>WordPress</h2>
                     <a class='from-top' href="https://elleestphotography.com" target="_blank" rel="noreferrer">ElleEstPhotography.com</a>
                  </div>
              <div className={styles.star}>
                <h2>CSS/SASS</h2>
                      <a class='from-top' href="https://natours-scss-pure-css.netlify.app" target="_blank" rel="noreferrer">Natours </a>
                      <a class='from-top' href="https://trillo-flexbox-scss.netlify.app/" target="_blank" rel="noreferrer">Trillo - flexbox</a>
              </div>

        
         </animated.div>
         
         
         
        

          
          
    
          </div>
        </CanvasModule>
  
        
    )
  
}


export default Projects;