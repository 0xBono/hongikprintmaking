import React from 'react';
import { Engine, Runner, Render, World, Bodies, Mouse, MouseConstraint } from 'matter-js';
import { useTheme } from 'next-themes';

export const useMatterLight = () => {
  const { theme } = useTheme();
  const matterEngine = Engine.create();

  const lightScene = React.useRef<HTMLDivElement>(null);

  const lightEngine = React.useRef(matterEngine);

  React.useEffect(() => {
    if (theme === 'light') {
      const clientWidth = document.body.offsetWidth;
      const clientHeight = document.body.offsetHeight;

      const render = Render.create({
        element: lightScene.current as HTMLElement,
        engine: lightEngine.current,
        options: {
          width: clientWidth,
          height: clientHeight,
          background: '#fff',
          wireframes: false,
        },
      });

      const playground_floor = Bodies.rectangle(0, clientHeight - 80, clientWidth * 10, 1, {
        isStatic: true,
      });

      const left_wall = Bodies.rectangle(-15, 0, 30, clientHeight * 10, {
        isStatic: true,
      });

      const right_wall = Bodies.rectangle(clientWidth + 15, 0, 30, clientHeight * 10, {
        isStatic: true,
      });

      const top_floor = Bodies.rectangle(0, -500, clientWidth * 10, 1, {
        isStatic: true,
      });

      const mouseConstraint = MouseConstraint.create(lightEngine.current, {
        mouse: Mouse.create(render.canvas),
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

      const texture_box = Bodies.rectangle(300, -50, 392, 245, {
        mass: 0,
        // frictionAir: 0.2,
        friction: 1,
        render: {
          sprite: {
            texture: '/assets/matter/WhiteYellow.png',
            xScale: 0.7,
            yScale: 0.7,
          },
        },
      });

      const texture_alphabet_d = Bodies.rectangle(300, 0, 278, 390, {
        mass: 0,
        // frictionAir: 0.2,
        friction: 1,
        render: {
          sprite: {
            texture: '/assets/matter/whiteD.png',
            xScale: 0.7,
            yScale: 0.7,
          },
        },
      });

      const texture_stick = Bodies.rectangle(650, 0, 180, 670, {
        mass: 0,
        // frictionAir: 0.2,
        friction: 1,
        render: {
          sprite: {
            texture: '/assets/matter/WhitePurple.png',
            xScale: 0.7,
            yScale: 0.7,
          },
        },
      });

      const texture_circle = Bodies.rectangle(950, 0, 304, 430, {
        mass: 0,
        // frictionAir: 0.2,
        friction: 1,
        render: {
          sprite: {
            texture: '/assets/matter/WhiteBlue.png',
            xScale: 0.6,
            yScale: 0.6,
          },
        },
      });

      const texture_alphabet_o = Bodies.rectangle(850, -400, 150, 210, {
        // angle: -0.5,
        mass: 0,
        // frictionAir: 0.2,
        friction: 1,
        render: {
          sprite: {
            texture: '/assets/matter/WhiteO.png',
            xScale: 0.8,
            yScale: 0.8,
          },
        },
      });

      const texture_alphabet_r = Bodies.rectangle(1300, -380, 258, 364, {
        angle: 0.1,
        mass: 0,
        // frictionAir: 0.2,
        friction: 1,
        render: {
          sprite: {
            texture: '/assets/matter/WhiteR.png',
            xScale: 1,
            yScale: 1,
          },
        },
      });

      const texture_alphabet_r_s = Bodies.rectangle(1250, 0, 150, 210, {
        mass: 0,
        // frictionAir: 0.2,
        friction: 1,
        render: {
          sprite: {
            texture: '/assets/matter/WhiteR.png',
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });

      World.add(lightEngine.current.world, [
        texture_alphabet_d,
        texture_box,
        texture_stick,
        texture_circle,
        texture_alphabet_o,
        texture_alphabet_r,
        texture_alphabet_r_s,
        playground_floor,
        top_floor,
        left_wall,
        right_wall,
        mouseConstraint,
      ]);

      // matter-js render
      Runner.run(lightEngine.current);
      Render.run(render);

      return () => {
        Render.stop(render);
        World.clear(lightEngine.current.world, false);
        Engine.clear(lightEngine.current);
        render.canvas.remove();
        render.textures = {};
      };
    }
  }, []);

  return { lightScene };
};
