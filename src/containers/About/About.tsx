import { useRef, useState } from 'react';
import { GNBLayout } from 'components/Layouts';

import classNames from 'classnames/bind';
import styles from './About.module.scss';
import { useTheme } from 'next-themes';

const cx = classNames.bind(styles);

export const About = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const itemSectionRef = useRef<any>(null);
  const [scroll, setScroll] = useState<number>();

  const handleScroll = () => {
    setScroll(itemSectionRef.current?.scrollTop);
  };
  return (
    <GNBLayout>
      <div className={cx('wrap')} ref={itemSectionRef} onScroll={handleScroll}>
        <section className={cx('section')}>
          <p>도르르 Dorr</p>
          <p>
            도르르,
            <br />
            프레스기를 돌리는 모양이기도, 둥근 무언가가 굴러가는 소리이기도 합니다. 도르르, 굴리면서
            주변을, 과거를, 미래를, 풍경을, 나를, 그리고 우리에 대해 말합니다.
          </p>
          <p>
            미래를 향해 구른다는 건 어쩔 수 없이 둥글어지고 마모되는 과정입니다. 오랜 시간 굴러 봐도
            스스로는 아직 둥글지 않다고 느낄 수도, 혹은 이쯤이면 충분히 어엿한 구의 형태가 되었다고
            느낄 수 있을 것입니다.
          </p>
          <p>
            어쩌면 단조로울 수도 있는 행위일지 모르지만 도르르, <br />
            계속해서 구르다 보면 어느 새 끝이라고 생각되는 지점을 만나게 됩니다. 그 순간이 오면
            방향을 틀어 다시 도르르, 또 다른 끝을 향해 다시 구르기를 시작합니다. 완벽하게 매끈한
            구의 모양이 아니더라도 도르르,
          </p>
          <p>
            굴러갈 31개의 구들이
            <br />
            도르르,
            <br />
            계속해서
            <br />
            도르르.
          </p>
          <p>
            2021 Hongik University Department of Printmaking
            <br />
            Graduate Online-Exhibition
          </p>
        </section>
        <section className={cx('section')}>
          <p>크레딧 Credit</p>
          <p>
            지도교수
            <br />
            임영길 Yim, Youngkil
            <br />
            권순왕 Qwon Sunwang
            <br />
            서희선 Suh Heesun
            <br />
            김지혜 Kim Jihea
            <br />
            김영진 Kim Youngjin
            <br />
            이승종 Lee Seungjong
            <br />
            이승희 Lee Seunghee
            <br />
            김정현 Kim Junghyun
          </p>
          <p>
            조교
            <br />
            박소이, 엄희주
          </p>
          <p>
            졸업전시자
            <br />
            이채연, 최준영, 김동욱, 문혜성, 양향기, 이예진, 박효원, 고명진, 김세희, 김혜연, 박수현,
            배송주, 백찬영, 송윤령, 안수연, 오은솔, 이하연, 장진윤, 정혜수, 정희원, 황은진, 김승연,
            김예진, 멍위치, 민서연, 박소하, 오가은, 이주리, 장동인, 전소연, 현지선
          </p>
          <p>
            졸업전시 준비 위원회
            <br />
            위원장│안수연
            <br />
            사무│고명진
            <br />
            디자인│배송주, 오은솔
            <br />
            공간│양향기
            <br />
            홍보│정혜수, 정희원
          </p>
          <p>
            도록, 포스터, 웹 디자인
            <br />
            돈워리베이비
          </p>
          <p>
            촬영
            <br />
            송현주
          </p>
          <p>
            인쇄
            <br />
            인타임
          </p>
          <p>
            애니메이션
            <br />
            최성희
          </p>
          <p>
            웹 개발
            <br />
            손지민
          </p>
          <p>후원</p>
          <p
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              gap: '48px',
              marginTop: '-24px',
              paddingBottom: '48px',
            }}
          >
            <img src="/assets/logo/200217.png" width="150" style={{ objectFit: 'contain' }} />
            <img src="/assets/logo/630.png" width="150" />
            <img src="/assets/logo/hana.svg" width="150" />
            <img src="/assets/logo/print-studio.svg" width="150" />
            <img src="/assets/logo/hangaram.svg" width="150" />
          </p>
        </section>
      </div>
      <img
        src="/assets/button/White_button.svg"
        alt="white-button"
        className={cx('dorr-button')}
        style={{ transform: `rotate(${scroll}deg)` }}
        onClick={handleChangeTheme}
      />
    </GNBLayout>
  );
};
