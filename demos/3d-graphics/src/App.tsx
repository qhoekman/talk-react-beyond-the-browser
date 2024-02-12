import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { ApartmentScene } from './scenes/apartment';

function App() {
  const ref = useRef(null);
  return (
    <Canvas
      camera={{
        position: [-56, 16, 65],
        fov: 30,
      }}
    >
      <color attach="background" args={['#ececec']} />
      <ApartmentScene ref={ref} />
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  );
}

export default App;
