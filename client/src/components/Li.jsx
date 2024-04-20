import React, { useEffect, useRef , useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Li(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/li.glb')
  const { actions } = useAnimations(animations, group)
  // useEffect(() => {
  //   actions['run'].play()
  // }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.826}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="00Eao_179">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="00Emo_178" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.mat_skin_face_Inst} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.mat_eye_Inst} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.mat_skin_Inst} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.mat_hair_Inst} skeleton={nodes.Object_10.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.mat_eyelash_Inst} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.mat_eyeshadow_Inst} skeleton={nodes.Object_12.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.mat_skin_face_Inst} skeleton={nodes.Object_13.skeleton} />
                  <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.mat_skin_body_Inst} skeleton={nodes.Object_14.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.mat_skin_body_Inst} skeleton={nodes.Object_15.skeleton} />
                  <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.mat_skin_leg_Inst} skeleton={nodes.Object_16.skeleton} />
                  <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.mat_props_Inst} skeleton={nodes.Object_17.skeleton} />
                  <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.mat_props_Inst} skeleton={nodes.Object_18.skeleton} />
                  <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.mat_props_Inst} skeleton={nodes.Object_19.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/li.glb')
