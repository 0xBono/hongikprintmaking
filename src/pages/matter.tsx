import { useEffect } from 'react';
import { Engine, Render, World, Bodies } from 'matter-js';

const Matter = () => {
  const engine = Engine.create();

  useEffect(() => {
    const render = Render.create({
      element: document.body,
      engine: engine,
    });

    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const boxB = Bodies.rectangle(450, 50, 80, 80);
    const ground = Bodies.rectangle(400, 410, 810, 60, { isStatic: true });

    World.add(engine.world, [boxA, boxB, ground]);

    Engine.run(engine);

    Render.run(render);
  }, [engine]);

  return null;
};

export default Matter;
