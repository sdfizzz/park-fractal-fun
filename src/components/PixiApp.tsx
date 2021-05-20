import React, { MutableRefObject } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import * as PIXI from 'pixi.js';
import { AppProvider, Stage } from '@inlet/react-pixi';
import SideMenu from './menu/SideMenu';
import FractalCanvas from './fractal/FractalCanvas';
import { useStore } from '../store/StoreContext';

const FractalContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const StyledSideMenu = styled(SideMenu)``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 330px 60px auto;

  ${StyledSideMenu} {
    grid-column: 1 / 2;
  }

  ${FractalContainer} {
    grid-column: 3 / 4;
  }
`;

const PixiApp = () => {
  const { screen } = useStore();
  const stageRef = React.useRef<Stage>(null);

  function onSaveClick() {
    if (!stageRef.current) {
      return;
    }

    // @ts-ignore
    const { renderer, stage } = stageRef.current.app;
    renderer.plugins.extract.canvas(stage).toBlob((b: Blob | null) => {
      const a = document.createElement('a');
      document.body.append(a);
      a.download = `${Date.now()}.png`;
      a.href = URL.createObjectURL(b);
      a.click();
      a.remove();
    }, 'image/png');
  }

  return (
    <Container>
      <StyledSideMenu onSaveClick={onSaveClick} />
      <FractalContainer>
        <FractalCanvas ref={stageRef} />
      </FractalContainer>
    </Container>
  );
};

export default PixiApp;
