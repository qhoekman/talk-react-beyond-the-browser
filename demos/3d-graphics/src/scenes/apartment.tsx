import { Stage, Torus } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Apartment } from '../models/apartment';

export const ApartmentScene = React.forwardRef((_props, ref) => {
  return (
    <Suspense fallback={null}>
      <Stage
        // @ts-expect-error - OrbitControls is not in the types
        controls={ref}
        preset="rembrandt"
        intensity={0.5}
        environment="city"
      >
        <Torus
          castShadow
          receiveShadow
          onClick={() => console.log('click')}
          material-color="red"
          position={[-42, 4, 42]}
        />
        <Apartment />
      </Stage>
    </Suspense>
  );
});
