import { Link } from "react-router-dom";
import styles from '../../styles/projects.module.css';

const Navigation = (props) => {
    return(
        <div className={styles.nav}>
            <div>
        <h1 >{props.title}</h1>
        </div>
        <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to='/projects'>Projects</Link>
        </div>
        
        </div>
    )
}


export default Navigation;

