

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";




export default function Moon(){
  const starRef = useRef();

  useFrame(({clock}) => {
      starRef.current.position.x-= .5 ;
      starRef.current.position.y -= .07;
     
  });


  
  
    return(
      <group ref={starRef} dispose={null}  >
        <group rotation={[-Math.PI / 2, 11, 30.4]} scale={[.095, .1, .3]} position={[200, 30,-26]}>
      <mesh ref={starRef}  >
          <sphereGeometry attach="geometry" />
          <meshStandardMaterial color={'whitesmoke'} roughness={0.5} metalness={.6} />
          
      </mesh>
      </group>
      </group>
    )
}