import { FC } from 'react'
import styled from '@emotion/styled'


export interface CounterProps {

  /**
   * Number of the counter
   */
  children: string;
}

export const Counter: FC<CounterProps> = ({
  children
}) => {
  return (
    <Frame>
      {children}
    </Frame>
  )
}

const Frame = styled.div`
  padding: 0 4px;
    color: #ec433c;
    border: 3px inset;
    line-height: 30px;
    letter-spacing: 0.08em;
    display: inline-block;
    background: #333;
    text-shadow: 0 0 2px #ec433c;
`