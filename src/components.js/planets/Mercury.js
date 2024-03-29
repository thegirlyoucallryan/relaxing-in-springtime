/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/mercury-32347fa4ec1a4987b71f461a401d91c4
title: Mercury
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const rotationRef = useRef();
  const { nodes, materials } = useGLTF('/mercuryOut.gltf');
  useFrame(({clock}) => {

    const elapsedTime = clock.getElapsedTime(); 
    group.current.rotation.y = -elapsedTime /104;
    rotationRef.current.rotation.z = elapsedTime/20;
    
  });
  return (
    <group ref={group} {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]} position={[50, -200, 950]} scale={[.9, .9 ,.9]} ref={rotationRef}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
      {/* <group rotation={[-Math.PI / 2, 0, 0]} position={[ 416, 140, 860]} scale={[.6,.6,.6]} ref={rotationRef}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}> */}
            <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mercury.gltf')
