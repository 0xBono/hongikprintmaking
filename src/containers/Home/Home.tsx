import { GNBLayout } from 'components/Layouts';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <GNBLayout>
      <img src="/assets/button/White_button.svg" alt="white-button" className={cx('dorr-button')} />
    </GNBLayout>
  );
};

export default Home;
