import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { SoftShadows } from '@react-three/drei';

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 25, 25], fov: 30}}>
      <color attach="background" args={["#242424"]} />
      <SoftShadows size={42}></SoftShadows>
      <Experience />
    </Canvas>
  );
}

export default App;
