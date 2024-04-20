import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bishop(props) {
  const { nodes, materials } = useGLTF('models/bishop.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.528}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-0.341, 1.834, 3.307]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.bishop_eyes_teeth_mat_0.geometry} material={materials.eyes_teeth_mat} />
            <mesh geometry={nodes.bishop_hair_0.geometry} material={materials.hair} />
            <mesh geometry={nodes.bishop_clothing_0.geometry} material={materials.clothing} />
            <mesh geometry={nodes.bishop_brows_lashes_0.geometry} material={materials.brows_lashes} />
            <mesh geometry={nodes.bishop_skin_0.geometry} material={materials.skin} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/bishop.glb')
