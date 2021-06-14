import React from 'react';
import styled from 'styled-components';
import * as PIXI from 'pixi.js';
import { Stage } from '@inlet/react-pixi';
import SideMenu from './menu/SideMenu';
import FractalCanvas from './fractal/FractalCanvas';
import ConfigPrinter from './test/ConfigPrinter';

const StyledFractalCanvas = styled(FractalCanvas)``;

const StyledConfigPrinter = styled(ConfigPrinter)``;

const StyledSideMenu = styled(SideMenu)``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 330px 60px auto;
  grid-template-rows: 50px auto;

  ${StyledSideMenu} {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  ${StyledFractalCanvas} {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }

  ${StyledConfigPrinter} {
    grid-column: 1 / 4;
    grid-row: 3/4;
  }
`;

PIXI.settings.RESOLUTION = 8;

const PixiApp = () => {
  const stageRef = React.useRef<Stage>(null);

  function onSaveClick(type: string) {
    if (!stageRef.current) {
      return;
    }

    // @ts-ignore
    const { renderer, stage } = stageRef.current.app;

    let image = renderer.plugins.extract.image(stage, `image/${type}`, 0);
    let imageSrc = image.src;

    const arr = imageSrc.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    const fileName = `${Date.now()}.${type}`;
    const file = new File([u8arr], fileName, { type: mime });

    const a = document.createElement('a');
    document.body.append(a);
    a.download = file.name;
    a.href = URL.createObjectURL(file);
    a.click();
    a.remove();
  }

  return (
    <Container>
      <StyledSideMenu onSaveClick={onSaveClick} />
      <StyledFractalCanvas ref={stageRef} />
      {window.location.hostname === 'localhost' ||
        (window.location.hostname === '127.0.0.1' && <StyledConfigPrinter />)}
    </Container>
  );
};

export default PixiApp;
