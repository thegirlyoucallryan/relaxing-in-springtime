/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/jupiter-d252c96ae3de48d7968b1206522ba9f5
title: Jupiter
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef()
  const rotationRef = useRef()
  useFrame(({clock}) => {

    const elapsedTime = clock.getElapsedTime(); 
   
    group.current.rotation.y   = -elapsedTime/26;
    rotationRef.current.rotation.z = elapsedTime/3
   
    

    
  });

  

 
  const { nodes, materials } = useGLTF('/jupiter.gltf')
  return (
    <group ref={group} {...props} dispose={null}  >
      <group rotation={[-Math.PI / 2, 0, 0]} position={[50, -200, 950]} scale={[.9, .9 ,.9]} ref={rotationRef}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/jupiter.gltf')
