import { Stage } from '@react-three/drei';
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
        environment="studio"
      >
        <Apartment />
      </Stage>
    </Suspense>
  );
});
