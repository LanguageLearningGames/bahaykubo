import { Billboard, CameraControls, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import { isHost } from "playroomkit";
import { useEffect, useRef, useState } from "react";
import { Player } from "./Player";
const MOVEMENT_SPEED = 202;

export const CharacterController = ({
                                      state,
                                      joystick,
                                      userPlayer,
                                      ...props
                                    }) => {
  const group = useRef();
  const character = useRef();

  const [animation, setAnimation] = useState("idleAnimation");


  return (
      <group ref={group} {...props}>
        <group ref={character}>
          <Player
              color = {state.state.profile?.color}
              animation={animation}
          />
        </group>
      </group>

  )
};

