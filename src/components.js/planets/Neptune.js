/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: kongle (https://sketchfab.com/minecraftnorge)
license: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
source: https://sketchfab.com/3d-models/neptune-8c6dc96f47ab4d798a1cb2d827da3fbe
title: Neptune
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  

  
  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime(); 
      group.current.rotation.y = -elapsedTime / 66;
     
  });
  const { nodes, materials } = useGLTF('/neptune.gltf')
  return (
    <group ref={group} {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]} position={[34, -460, 884]} scale={[41,41,41]} >
        <mesh geometry={nodes.Object_2.geometry} material={materials.moon}  />
      </group>
    </group>
  )
}

useGLTF.preload('/neptune.gltf')