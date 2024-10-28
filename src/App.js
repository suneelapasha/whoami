import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ height: '100vh', background: '#272727' }}>
      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      
      {/* Add a 3D box */}
      <Box />

      {/* Controls to orbit around the scene */}
      <OrbitControls />
    </Canvas>
  );
}

export default App;
