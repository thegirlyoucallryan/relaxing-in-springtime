
import { useLoader } from "@react-three/fiber";


import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from '../../images/moon.jpg';
import { useRef } from "react";





export default function Moon(){

  const moonRef = useRef();

    const colorMap = useLoader(TextureLoader, texture)
    return(
      <mesh ref={moonRef} rotation={[-139.51, -61.37, -1.75]} scale={[180, 180, 160]} position={[390, 615, -810 ]} >
          <sphereGeometry attach="geometry" />
         
          <meshStandardMaterial map={colorMap} roughness={1} metalness={.1} />
      </mesh>
    )
}