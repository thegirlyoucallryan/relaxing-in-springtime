

import { useLoader } from "@react-three/fiber";


import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from '../../images/dream.jpg'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";




export default function Moon(){
  const dreamRef = useRef();

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime(); 
      dreamRef.current.rotation.y = -elapsedTime / 10;
     
  });


  
    const colorMap = useLoader(TextureLoader, texture)
    return(
      <group ref={dreamRef} dispose={null}  scale={[10,10,10]} position={[340, -1,-4]}>
        <group rotation={[-Math.PI / 2, 11, 30.4]}>
      <mesh ref={dreamRef}  >
          <boxGeometry attach="geometry" />
          <meshStandardMaterial map={colorMap} roughness={0.5} metalness={.1} />
      </mesh>
      </group>
      </group>
    )
}