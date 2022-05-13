import { FC } from 'react';
import styled from '@emotion/styled';

import { Legend, LegendProps } from './Legend/Legend';
import { GameName, GameNameProps } from './Title/Title';

export const Header: FC = ({ }) => {
  return (
    <HeaderGame>
      <GameName>
        minesweerper
      </GameName>
      <Legend
        feature='flag'
        firstAction='alt'
        secondAction='click'
      />
    </HeaderGame>
  )
}

const HeaderGame = styled.div`
  text-align: center;
  position: relative;
  display: inline-block;
`