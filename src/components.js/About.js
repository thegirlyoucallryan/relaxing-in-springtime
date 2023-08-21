import CanvasModule from "./CanvasModule";
import styles from '../styles/about.module.css'
import Navigation from "./ui/Navigation";

const About = () => {

  window.addEventListener('mousedown', e => e.preventDefault());

  return(
   
      
      <div className={styles.about}>

            
        <div style={{height: 60}}>.</div>
          <div className={styles.header}>
          <h4>I design & build digital products</h4>
          <div className={styles.linkBox}>
          <a href="https://github.com/thegirlyoucallryan">GitHub</a>
          <a href="https://www.linkedin.com/in/ryan-marie-hartley/">LinkedIn</a>

          </div>
        
          <h3 style={{color: "pink"}}>Hello,  I'm Ryan.  I'm a designer and developer with many years of experience in a wide range of artistic disciplines.</h3>
          <p><br/>I am strongly focused on front-end development but I greatly appreciate the capabilities the backend provides. &nbsp;I balance my time and energy between practicing many interests and hobbies and learning new skills to excel my capabilities to new levels.
           I have a long history as a professional photographer and editor. 
            I am well versed in Adobe Photoshop and Lightroom. I continue to study and implement designs that are both engaging and well communicative with its users.  &nbsp;I love Figma and greatly enjoy working with CSS to make things just right.
            <br/><br/>
            I am accustomed to fast paced enviroments and need to be challenged to thrive.  I love writing code because it enables me to be continously challenged and accomplished but also humbled and inspired by what others can do.
            So far I have focused mainly on web development technologies but, have been diving deeper into mobile app development. &nbsp; I have spent a lot of time working with libraries and frameworks like React, NextJs, Node, and React Native.
             This profile was built with ThreeJs.<br/><br/>
            I spent the last year working with a dedicated, fast moving team at Haystack. Together we built a few of the apps listed in my projects section as well as the accompanying admin panels and websites. I am also launching a some personal projects of my own.
             I tend to be focused and driven and very straight forward. I enjoy working as a team and am looking forward to the opportunity to work toward building new ideas that can enrich the lives of others. 
          </p>
          </div>
        
      </div>
  
   
  )
};

export default About;