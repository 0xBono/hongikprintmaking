import { useEffect, useRef } from 'react';
import { Engine, Render, World, Bodies, Mouse, MouseConstraint, Composite } from 'matter-js';
import { GNBLayout } from 'components/Layouts';
import { useTheme } from 'next-themes';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

/**
 * @description 해당 페이지는 CSR에서만 작동되는 페이지입니다.
 * @author JiminSon(0xBono)
 *
 * NextJS에서 지원하는 Dynamic Import를 사용해서 페이지를 로드하기 때문에,
 * 기존 다른 페이지에서 export const 하는 방식과는 다른 export default 방식을 사용.
 */
const Home = () => {
  const scene = useRef(null);
  const engine = useRef(Engine.create());

  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const cw = document.body.offsetWidth;
    const ch = document.body.offsetHeight;

    const render = Render.create({
      element: scene.current!,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: theme === 'dark' ? 'transparent' : '#fff',
      },
    });

    const alphabetD = Bodies.circle(350, 200, 350, {
      mass: 0,
      restitution: 0.9,
      friction: 0.005,
      render: {
        sprite: {
          texture: theme === 'dark' ? `/assets/matter/blackD.png` : `/assets/matter/whiteD.png`,
          xScale: 0.8,
          yScale: 0.8,
        },
      },
    });

    const alphabetBox = Bodies.rectangle(350, 0, 64, 64, {
      mass: 0,
      restitution: 0.9,
      friction: 0.005,
      density: 0.0005,
      frictionAir: 0.06,
      render: {
        sprite: {
          texture: '/assets/matter/blackYellow.png',
          xScale: 0.8,
          yScale: 0.8,
        },
      },
    });

    const alphabetPurple = Bodies.rectangle(800, 0, 32, 900, {
      mass: 0,
      restitution: 0.9,
      friction: 0.005,
      density: 0.0005,
      frictionAir: 0.06,
      render: {
        sprite: {
          texture: '/assets/matter/blackPurple.png',
          xScale: 0.8,
          yScale: 0.8,
        },
      },
    });

    const alphabetBlue = Bodies.rectangle(1200, 0, 64, 200, {
      mass: 0,
      restitution: 0.9,
      friction: 0.005,
      density: 0.0005,
      frictionAir: 0.06,
      render: {
        sprite: {
          texture: '/assets/matter/blackBlue.png',
          xScale: 0.7,
          yScale: 0.7,
        },
      },
    });

    const alphabetR = Bodies.rectangle(1000, 0, 64, 900, {
      mass: 0,
      restitution: 0.9,
      friction: 0.005,
      density: 0.0005,
      frictionAir: 0.06,
      render: {
        sprite: {
          texture: '/assets/matter/blackR.png',
          xScale: 1,
          yScale: 1,
        },
      },
    });

    const alphabetRSmall = Bodies.rectangle(1300, 0, 64, 900, {
      mass: 0,
      restitution: 0.9,
      friction: 0.005,
      density: 0.0005,
      frictionAir: 0.06,
      render: {
        sprite: {
          texture: '/assets/matter/blackR.png',
          xScale: 1,
          yScale: 1,
        },
      },
    });

    const alphabetRSmallSmall = Bodies.rectangle(1200, 0, 64, 900, {
      mass: 0,
      restitution: 0.9,
      friction: 0.005,
      density: 0.0005,
      frictionAir: 0.06,
      render: {
        sprite: {
          texture: '/assets/matter/blackR.png',
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });

    var mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: Mouse.create(render.canvas),
      // constraint: {
      //   stiffness: 0.2,
      //   render: {
      //     visible: false,
      //   },
      // },
    });

    Composite.add(engine.current.world, mouseConstraint);

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
      alphabetD,
      alphabetBox,
      alphabetPurple,
      alphabetBlue,
      alphabetR,
      alphabetRSmall,
      alphabetRSmallSmall,
    ]);

    Engine.run(engine.current);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);
  return (
    <GNBLayout>
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
      <img
        src="/assets/button/White_button.svg"
        alt="white-button"
        className={cx('dorr-button')}
        onClick={handleChangeTheme}
      />
    </GNBLayout>
  );
};

export default Home;
