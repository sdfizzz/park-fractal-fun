import React from 'react';
import { Article, Section, Title } from '../components/info/textStyles';
import Definition from '../components/info/Definition';
import Properties from '../components/info/Properties';
import WhyFractal from '../components/info/WhyFractal';
import Pyramids from '../components/info/Pyramids';

const Info = () => (
  <Section>
    <Article>
      <Title>Канторово множество</Title>
      <Definition />
      <Properties />
      <WhyFractal />
      <Pyramids />
    </Article>
  </Section>
);

export default Info;
