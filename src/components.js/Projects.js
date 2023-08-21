

import styles from '../styles/projects.module.css';

import CanvasModule from './CanvasModule';
import Navigation from './ui/Navigation';
import { useSpring, animated, easings } from 'react-spring';

 




const Projects = ({home, about}) => {
  const leftIn = useSpring({ to: {  opacity: '1', marginLeft: '3%'}, from: { opacity: '0', marginLeft: '-500'},  config:{duration: 5000, easing: easings.easeOutCirc}});
 

  window.addEventListener('mousedown', (e) => e.preventDefault())

    return(

       
        <div>
         
        
         
          <div className={styles.netlify} id='netlify'>
       
        {/* <Navigation title='Projects'/> */}
        {/* <nav>
          <a onClick={()=> home()}>Home</a>
          <a onClick={()=> about()}>About</a>
        </nav> */}
       
         <animated.div style={leftIn} className={styles.starBox}>
              <div className={styles.star}>
                <h2>ThreeJs</h2>
                      <a href="https://threejs-landing-page-orion.netlify.app/" target="_blank" rel="noreferrer">3D landing page</a>
                      <a href="" target="_blank" rel="noreferrer">This website</a>
                  </div> 
              <div className={styles.star}>
                <h2 style={{display: 'flex', flexDirection: 'column'}}>ReactJs</h2>
                      <a class='from-top' href="https://appetite-atelier.netlify.app" target="_blank " rel="noreferrer">Appetite Atelier </a>
                    
                      <a class='from-top' href="https://craftbeer-punkapi.netlify.app/" target="_blank" rel="noreferrer">Craft Beer Search - Api  </a>
                      <a class='from-top' href="https://simple-react-image-search.netlify.app" target="_blank" rel="noreferrer"> Image Search</a>
                      <a class='from-top' href="https://youtube-video-search-reach.netlify.app" target="_blank" rel="noreferrer"> Video Search</a>
                      <a class='from-top' href="https://reactjs-expenses-app.netlify.app" target="_blank" rel="noreferrer">Expenses App</a>
                      
                      
                <h2>React Native</h2>
                <a class='from-top' href="https://getLesla.com" target="_blank" rel="noreferrer">Lesla</a>
                <a class='from-top' href="https://play.google.com/store/apps/details?id=org.cicf.mvmt10k&pli=1" target="_blank" rel="noreferrer">Mvmt10k</a>
                <a class='from-top' href="https://aerial-admin-app.com" target="_blank" rel="noreferrer">Aerial Admin</a>
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
              {/* <div className={styles.star}>
                <h2>WordPress</h2>
                     <a class='from-top' href="https://elleestphotography.com" target="_blank" rel="noreferrer">ElleEstPhotography.com</a>
                     <span></span>
                  </div> */}
              <div className={styles.star}>
                <h2>CSS/SASS</h2>
                      <a class='from-top' href="https://natours-scss-pure-css.netlify.app" target="_blank" rel="noreferrer">Natours </a>
                      <a class='from-top' href="https://trillo-flexbox-scss.netlify.app/" target="_blank" rel="noreferrer">Trillo - flexbox</a>
              </div>

        
         </animated.div>
         
         
         
        

          
          
    
          </div>
        </div>
  
        
    )
  
}


export default Projects;