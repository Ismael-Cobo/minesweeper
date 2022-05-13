import { FC } from 'react';
import styled from '@emotion/styled';

import { Legend, LegendProps } from './Legend/Legend';
import { Title, TitleProps } from './Title/Title';

export type HeaderProps = TitleProps & LegendProps

export const Header: FC<HeaderProps> = ({
  title,
  feature,
  firstAction,
  secondAction
}) => {
  return (
    <HeaderGame>
      <Title title={title} />
      <Legend
        feature={feature}
        firstAction={firstAction}
        secondAction={secondAction}
      />
    </HeaderGame>
  )
}

const HeaderGame = styled.div`
  text-align: center;
  position: relative;
  display: inline-block;
`