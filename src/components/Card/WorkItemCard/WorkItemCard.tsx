import classNames from 'classnames/bind';
import styles from './WorkItemCard.module.scss';

const cx = classNames.bind(styles);

export const WorkItemCard = () => {
  return (
    <article className={cx('wrap')}>
      <img
        src="/assets/button/White_button.svg"
        alt="Picture of the author"
        className={cx('card-image')}
      />
      <span className={cx('user-name')}>Ko Meong jin</span>
    </article>
  );
};
