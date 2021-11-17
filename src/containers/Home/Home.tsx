import { GNBLayout } from 'components/Layouts';
import { useTheme } from 'next-themes';
import { useMatter } from 'hooks/useMatter';
import { useMatterLight } from 'hooks/useMatterLight';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useCallback, useEffect, useState } from 'react';
import router from 'next/router';

const cx = classNames.bind(styles);

/**
 * @description 해당 페이지는 CSR에서만 작동되는 페이지입니다.
 * @author JiminSon(0xBono)
 *
 * NextJS에서 지원하는 Dynamic Import를 사용해서 페이지를 로드하기 때문에,
 * 기존 다른 페이지에서 export const 하는 방식과는 다른 export default 방식을 사용.
 */
const Home = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    router.reload();
  };

  const { darkScene } = useMatter();
  const { lightScene } = useMatterLight();

  return (
    <GNBLayout>
      {theme === 'dark' ? (
        <div id="dark_canvas" ref={darkScene} style={{ width: '100%', height: '100%' }} />
      ) : (
        <div id="light_canvas" ref={lightScene} style={{ width: '100%', height: '100%' }} />
      )}
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
