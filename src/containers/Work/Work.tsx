import { useRef } from 'react';
import { GNBLayout } from 'components/Layouts';
import { WorkItemCard } from 'components/Card';

import classNames from 'classnames/bind';
import styles from './Work.module.scss';

const cx = classNames.bind(styles);

export const Work = () => {
  const itemSectionRef = useRef<HTMLElement>(null);
  return (
    <GNBLayout>
      <div className={cx('wrap')}>
        <section className={cx('detail-section')}>
          <div className={cx('user-info')}>
            <p>
              <span className={cx('user-ko-name')}>오은솔</span>
              <span className={cx('user-en-name')}>OH EUN SOL</span>
            </p>
            <p className={cx('user-sns-wrap')}>
              <span className={cx('user-sns')}>@eun__sol_ / vanessaoh@naver.com</span>
              <button className={cx('guest-book-button')}>Guest Book</button>
            </p>
          </div>
          {Array.from(Array(8)).map((_, index) => (
            <>
              <div className={cx('work-image')} />
              <div className={cx('work-info-wrap')}>
                <div className={cx('work-info')}>
                  <p>
                    <span className={cx('info-kind')}>Title:</span>
                    <span>ICE DREAM 아이스 드림</span>
                  </p>
                  <p>
                    <span className={cx('info-kind')}>Format:</span>
                    <span>Silkscreen, Digital print, Resin</span>
                  </p>
                  <p>
                    <span className={cx('info-kind')}>Year:</span>
                    <span>2021</span>
                  </p>
                </div>
                <div className={cx('work-info')}>
                  <p>
                    <span className={cx('info-kind')}>Length:</span>
                    <span>87.6cm</span>
                  </p>
                  <p>
                    <span className={cx('info-kind')}>Width:</span>
                    <span>44.8cm</span>
                  </p>
                  <p>
                    <span className={cx('info-kind')}>Depth:</span>
                    <span>4.4cm</span>
                  </p>
                </div>
              </div>
              <p className={cx('work-ko-description')}>
                우리는 매일 스스로를 포장하며 살아갑니다. 각자의 역할과 주어진 상황에서 본래의
                모습이 아닌, 포장된 ‘나’로 행동합니다. [ 포장 包裝 ] 본래의 것을 가리고 새롭게 또는
                더 낫게 꾸밈. 그렇다면 진정한 나는 어떤 모습일까요? 무엇을 좋아하고, 무엇을
                싫어하는지. 그리고 무엇을 하고 싶은지. 나를 감싸고 있는 가식적인 포장을 벗겨내고, 그
                안에 가지고 있는 다양한 꿈과 잠재력을 돌아보았으면 합니다. 판화 작품으로 포장된
                형형색색의 꿈과 욕망을 파는 가게, IAM GROCERY에서 이달의 음식을 소개합니다.
              </p>
              <p className={cx('work-en-description')}>
                We wrap ourselves up every day. Living in the respective roles and given situations,
                we act as a packaged ‘me’ rather than the original form. [ Packaging ] Covering the
                original and decorating it new or in a better form. So, what are we like? What do we
                like, what do we hate, and what do we want to do? By peeling off the pretentious
                packaging that is covering us, Look back on the several dreams and potentials that
                you own. Introducing the food of the month at I AM GROCERY, a shop selling colorful
                dreams and desires wrapped in printmaking works.
              </p>
            </>
          ))}
        </section>
        <section ref={itemSectionRef} className={cx('item-section')}>
          <div className={cx('item-wrap')}>
            {Array.from(Array(32)).map((_, i) => (
              <WorkItemCard key={i} />
            ))}
          </div>
        </section>
      </div>
    </GNBLayout>
  );
};
