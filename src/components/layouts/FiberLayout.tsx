import { ReactNode, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

interface FiberLayoutProps {
  children: ReactNode;
}

export const FiberLayout: React.FC<FiberLayoutProps> = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  const sizes = {
    width: typeof window !== undefined ? width : undefined,
    height: typeof window !== undefined ? height : undefined,
  };

  const aspectRatio = width / height;
  return (
    <Canvas
      style={{ width: sizes.width, height: sizes.height }}
      camera={{
        position: [0, 0, 5],
        aspect: aspectRatio,
        near: 0.1,
        far: 100,
      }}
    >
      {children}
    </Canvas>
  );
};
