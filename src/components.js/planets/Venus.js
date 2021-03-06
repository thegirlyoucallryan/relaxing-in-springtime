/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/venus-d497ce25553447f3b7b679110c85cfa1
title: Venus
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();

    useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime(); 
    group.current.rotation.y = -elapsedTime / 110;
    
  });
 
  const { nodes, materials } = useGLTF('/venus.gltf')
  return (
    <group ref={group} {...props} dispose={null}   >
      <group rotation={[-Math.PI / 2, 0, 0]}  position={[ -386,-83, -265]} scale={[13,13,13]} >
        <group rotation={[Math.PI / 2, 0, 0]}  >
          <group rotation={[-Math.PI / 2, 0, 0]} >
            <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']}/>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/venus.gltf')
