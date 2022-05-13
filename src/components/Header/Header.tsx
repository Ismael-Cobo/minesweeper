import { FC } from 'react';
import styled from '@emotion/styled';

import { Legend, LegendProps } from './Legend/Legend';
import { GameName, GameNameProps } from './Title/Title';

export type HeaderType = LegendProps & GameNameProps

export const Header: FC<HeaderType> = ({ name, ...legendProps }) => {
  return (
    <HeaderGame>
      <GameName name={name} />
      <Legend
        {...legendProps}
      />
    </HeaderGame>
  )
}

const HeaderGame = styled.div`
  text-align: center;
  position: relative;
  display: inline-block;
`