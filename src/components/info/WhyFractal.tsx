import React from 'react';
import { Paragraph, ParagraphTitle, WhiteLink } from './textStyles';
import { Svg11, Svg12, Svg13 } from './svg';

const WhyFractal = () => (
  <>
    <ParagraphTitle>Почему это фрактал?</ParagraphTitle>
    <Paragraph>Существует размерность Хаусдорфа-Безинковича</Paragraph>
    <Svg11 />
    <Paragraph>Классическая размерность&nbsp;Канторово множества</Paragraph>
    <Svg12 />
    <Paragraph>При этом, если выполняется</Paragraph>
    <Svg13 />
    <Paragraph>
      то&nbsp;мы&nbsp;имеем дело с&nbsp;фракталом. Подробнее можно прочитать{' '}
      <WhiteLink href="https://www.maths.ed.ac.uk/~v1ranick/papers/fleron.pdf">здесь</WhiteLink>{' '}
      и&nbsp;
      <WhiteLink href="http://elibrary.lt/resursai/Uzsienio%20leidiniai/ioffe/ztf/2002/02/ztf_t72v02_02.pdf">
        здесь
      </WhiteLink>
      .
    </Paragraph>
  </>
);

export default WhyFractal;
