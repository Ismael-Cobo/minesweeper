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
  display: inline-block;
  padding: 0 0.3vw;
  color: #ec433c;
  border: 0.15vw inset;
  line-height: 2vw;
  letter-spacing: 0.08em;
  background-color: #333;
  text-shadow: 0 0 0.1vw #ec433c;
`