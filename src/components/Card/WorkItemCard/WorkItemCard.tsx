import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './WorkItemCard.module.scss';

const cx = classNames.bind(styles);

export const WorkItemCard = () => {
  const [color, setColor] = useState<string>();
  const [mouseHover, setMouseHover] = useState<boolean>(false);

  useEffect(() => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }, []);
  return (
    <article
      className={cx('wrap')}
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      style={{ backgroundColor: mouseHover ? color : '#fff' }}
    >
      <img
        src="/assets/button/White_button.svg"
        alt="Picture of the author"
        className={cx('card-image')}
      />
      <span className={cx('user-name')}>Ko Meong jin</span>
    </article>
  );
};
