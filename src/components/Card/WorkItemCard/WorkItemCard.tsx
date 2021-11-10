import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './WorkItemCard.module.scss';

const cx = classNames.bind(styles);

export const WorkItemCard = () => {
  const [color, setColor] = useState<string>();
  const [mouseHover, setMouseHover] = useState<boolean>(false);

  useEffect(() => {
    const colorArr = ['#FFD238', '#FF8D00', '#AE621E', '#FFBEFE', '#B61BC0', '007D00', '1EC0EE'];
    const randomColor = colorArr[Math.floor(Math.random() * 5)];
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
