import { useState } from 'react';
import Lottie from 'lottie-react';
import scrollLottie from '../../data/scrollLottie.json';

import { VIDEO } from '../../data/video';
import * as S from './style';
import Logo from '../Logo';

export default function VideoList() {
  const [activeItem, setActiveItem] = useState(0);
  const handleItemMouseEnter = (idx: number) => {
    idx === activeItem ? setActiveItem(0) : setActiveItem(idx);
  };
  return (
    <S.Wrapper>
      {VIDEO.map((item, idx) => (
        <S.ImgContainer key={item.id} onMouseEnter={() => handleItemMouseEnter(idx + 1)}>
          <img src={item.thumbnail} />
        </S.ImgContainer>
      ))}
      <div style={{ position: 'absolute', top: '20%' }}>
        <Logo logo="dansong" src="/logos/dansongW.png" />
      </div>
      <S.LottieContainer>
        <Lottie animationData={scrollLottie} />
      </S.LottieContainer>

      {activeItem !== 0 && (
        <S.Box initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <S.Video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            onMouseLeave={() => setActiveItem(0)}
          >
            <source src={VIDEO[activeItem - 1].video} type="video/mp4" />
          </S.Video>
        </S.Box>
      )}
    </S.Wrapper>
  );
}
// <iframe
//   width="560"
//   height="315"
//   src={VIDEO[activeItem - 1].src}
//   title="YouTube video player"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// ></iframe>
