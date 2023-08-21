import {Canvas} from '@react-three/fiber';
import Moon from './planets/Moon';

import {  OrbitControls, Stars} from '@react-three/drei';
import { Suspense } from 'react';
import Flower from './Flower'
import Dream from './planets/Dream';
import Neptune from './planets/Neptune';
import Jupiter from './planets/Jupiter';
import Venus from './planets/Venus';
import Uranus from './planets/Uranus';
import Mars from './planets/Mars';
import Mercury from './planets/Mercury';
import ShootingStar from './planets/ShootingStar';
import styles from '../styles/app.module.css'
import Pluto from './planets/Pluto'
import  Ufo  from './notPlanets/Ufo';


const CanvasModule = (props) => {


 

    return(
      <div >
      {props.children}  
     <Canvas className={styles.canvas} style={{ 
       background: 'linear-gradient(180deg, rgba(12,4,25,.1) 0%, rgba(0,0,0, .8) 28%, rgba(45,42, 56, .7) 76%, rgba(201,110,120,.3) 100%)',
        height:'100vh'
        
 }}

     >
     <pointLight intensity={.9} />
       <ambientLight intensity={0.02} color={'#FFF'} />
       <OrbitControls enableZoom={false}  maxAzimuthAngle={Math.PI / 4}     maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}/>
    
     <Suspense fallback={null}>
    
     <Stars radius={200} depth={400} count={3000} factor={7} fade={true} />
       <Flower />
       <Dream />
       <Moon  />
       <Neptune />
       <Ufo/>
       <Jupiter />
       <Venus/>
   
       <Uranus />
       <Mars />
       <Pluto/>
       <Mercury />
       <ShootingStar />
     
      
       </Suspense>
     
       
     </Canvas>
     </div>
    )
  
}

export default CanvasModule;