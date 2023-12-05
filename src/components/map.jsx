import { useGLTF } from '@react-three/drei';
import { RigidBody } from "@react-three/rapier";
import { useEffect } from 'react';

export const Map = () => {
  const map = useGLTF("models/map.glb");

  //enable shadow for every object in map
  useEffect(() => {
    map.scene.traverse((child) => {
      if(child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  });

  return (
      <>

          <primitive object={map.scene} />

      </>
  )
};

//Use preload to make sure our environment is load at the very beginning
useGLTF.preload("models/map.glb");