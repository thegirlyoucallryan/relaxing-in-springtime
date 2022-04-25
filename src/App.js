
import styles from './styles/app.module.css';
import Projects from './components.js/Projects';
import { Route } from 'react-router-dom';
import Headline from './components.js/Headline';
import Contact from './components.js/Contact';
import About from './components.js/About';


const App = () => {


  return(
    <div className={styles.app}>
      
     
      <Route path="/"  exact component={Headline} />
              
       <Route path="/projects" component={Projects} exact/>
     
      <Route path="/contact" component={Contact} exact/>

      <Route path="/about" component={About} exact />

     
    
  
     </div>
  )
}




export default App;