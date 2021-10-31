import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export const Header = () => {
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
        <span className={cx('nav-item')}>HOME</span>
        <span className={cx('nav-item')}>ABOUT</span>
        <span className={cx('nav-item')}>WORK</span>
        <span className={cx('nav-item')}>GAME</span>
      </div>
    </header>
  );
};
