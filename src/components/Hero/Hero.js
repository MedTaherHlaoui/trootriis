import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Mohamed Taher Hlaoui. I am an React-JS & Flutter developer and business computing student
        </SectionText>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;
