import React from 'react';
import { Paragraph, ParagraphTitle } from './textStyles';
import { Svg11, Svg12, Svg13 } from './svg';

const WhyFractal = () => (
  <>
    <ParagraphTitle>Почему это фрактал?</ParagraphTitle>
    <Paragraph>Существует размерность Хаусдорфа-Безинковича</Paragraph>
    <Svg11 />
    <Paragraph>Классическая размерность КМ </Paragraph>
    <Svg12 />
    <Paragraph>При этом, если выполняется,</Paragraph>
    <Svg13 />
    <Paragraph>то мы имеем дело с фракталом. Подробнее можно прочитать здесь и здесь.</Paragraph>
  </>
);

export default WhyFractal;
