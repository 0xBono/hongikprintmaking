import { GNBLayout } from 'components/Layouts';

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
  return (
    <GNBLayout>
      <img src="/assets/button/White_button.svg" alt="white-button" className={cx('dorr-button')} />
    </GNBLayout>
  );
};

export default Home;
