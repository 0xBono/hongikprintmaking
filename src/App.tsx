import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

function App() {
  const carModel = useLoader(FBXLoader, '/model/Low-Poly-Racing-Car.fbx');
  const hongikModel = useLoader(FBXLoader, '/model/hongik-sample-model.fbx');
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.6} position={[20, 90, 0]} angle={0.1} penumbra={1} shadow-mapSize-width={2048} shadow-mapSize-height={2048} castShadow />
      <OrbitControls />
      <mesh scale={0.01}>
        <primitive object={carModel} dispose={null} />
      </mesh>
      <mesh scale={0.01}>
        <primitive object={hongikModel} dispose={null} />
      </mesh>
    </Canvas>
  );
}

export default App;
