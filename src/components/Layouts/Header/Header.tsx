import router from 'next/router';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export const Header = () => {
  const [location, setLocation] = useState('');
  const handleRouterChange = (url: string) => {
    router.push(url);
  };
  useEffect(() => {
    setLocation(window.location.href.split('/')[3]);
  }, []);
  return (
    <header className={cx('wrap')}>
      <div className={cx('carousel-wrap')}>
        {Array.from(Array(12)).map((_, i) => (
          <span key={i} className={cx('carousel-item')}>
            HONGIK UNIVERSITY DEPARTMENT OF PRINTMAKING GRADUATION EXHIBITION 2021. 11.29 - 12.04
            10AM-6PM
          </span>
        ))}
      </div>
      <div className={cx('nav-wrap')}>
        <p className={cx('nav-item')} onClick={() => handleRouterChange('/')}>
          <div
            className={cx('disable-circle', {
              active: '' === location,
            })}
          />
          HOME
        </p>
        <p className={cx('nav-item')}>
          <div
            className={cx('disable-circle', {
              active: 'about' === location,
            })}
          />
          ABOUT
        </p>
        <p className={cx('nav-item')} onClick={() => handleRouterChange('work')}>
          <div
            className={cx('disable-circle', {
              active: 'work' === location,
            })}
          />
          WORK
        </p>
        <p className={cx('nav-item')}>
          <div className={cx('disable-circle')} />
          GAME
        </p>
      </div>
    </header>
  );
};
