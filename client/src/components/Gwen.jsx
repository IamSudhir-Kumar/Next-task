import React, { useEffect, useRef, useState } from 'react'
import { useGLTF , useAnimations, useFBX} from '@react-three/drei'

export function Gwen(props) {
  const { nodes, materials } = useGLTF('models/gwen.glb')
  const group = useRef()
  const {animations: dancing} = useFBX("animation/Dancing.fbx")
  const {animations: standing} = useFBX("animation/Stand.fbx")

  dancing[0].name = "Dancing"

  const {actions} = useAnimations(dancing, group)

  useEffect(() => {
    actions["Dancing"].play()
  } , [])
  return (
    <group ref={group}>
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 3, 1.5, 1]}>
        <group scale={0.01}>
          <group scale={1}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh geometry={nodes.Object_87.geometry} material={materials['40_Earrings.Earrings_1_0_0.001']} skeleton={nodes.Object_87.skeleton} />
            <skinnedMesh geometry={nodes.Object_90.geometry} material={materials['40_Shoes.Shoes_1_0_0.001']} skeleton={nodes.Object_90.skeleton} />
            <skinnedMesh geometry={nodes.Object_93.geometry} material={materials['40_Material115_1_0_0.001']} skeleton={nodes.Object_93.skeleton} />
            <skinnedMesh geometry={nodes.Object_96.geometry} material={materials['40_Material1271_1_0_0.001']} skeleton={nodes.Object_96.skeleton} />
            <skinnedMesh geometry={nodes.Object_99.geometry} material={materials['40_Material1272_1_0_0.001']} skeleton={nodes.Object_99.skeleton} />
            <skinnedMesh geometry={nodes.Object_102.geometry} material={materials['40_Material127_1_0_0.001']} skeleton={nodes.Object_102.skeleton} />
            <skinnedMesh geometry={nodes.Object_105.geometry} material={materials['40_Material188_1_0_0.001']} skeleton={nodes.Object_105.skeleton} />
            <skinnedMesh geometry={nodes.Object_108.geometry} material={materials['40_Pin_1_0_0.001']} skeleton={nodes.Object_108.skeleton} />
            <skinnedMesh geometry={nodes.Object_111.geometry} material={materials['4_Pants.Pants_0.1_0_0.001']} skeleton={nodes.Object_111.skeleton} />
            <skinnedMesh geometry={nodes.Object_114.geometry} material={materials['4_Shirt.Shirt_0.1_0_0.001']} skeleton={nodes.Object_114.skeleton} />
          </group>
        </group>
      </group>
    </group>
    </group>
  )
}

useGLTF.preload('models/gwen.glb')
