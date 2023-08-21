
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const rotationRef = useRef();
  const { nodes, materials } = useGLTF('/ufo.gltf');
  // useFrame(({clock}) => {

  //   const elapsedTime = clock.getElapsedTime(); 
  //   group.current.rotation.y = -elapsedTime /104;
  //   rotationRef.current.rotation.z = elapsedTime/20;
    
  // });
  useFrame(({clock}) => {
    group.current.position.x-= .2 ;
    group.current.position.y -= .07;
    group.current.position.z = .3;
  
   
});
  return (
    <group ref={group} {...props} dispose={null} >
 <group rotation={[-Math.PI / 2, 4, 2]} scale={[.2, .2, .2]} position={[80, 350, .9]}>
        <group rotation={[Math.PI / 20, 2, 1.5]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={110}>
            <mesh geometry={nodes.Object_5.geometry} material={materials['Metal']} />
            <mesh geometry={nodes.Object_4.geometry} material={materials['Black']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['Red_Light']} />
          </group>
        </group>
      </group>
    </group>
  )
}
