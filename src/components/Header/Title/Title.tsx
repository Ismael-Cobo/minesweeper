import styled from "@emotion/styled"

export interface GameNameProps {
  /**
   * Text for the header
   */
  children: string
}

export const GameName = styled.h1<GameNameProps>`
  margin-bottom: 2rem;
  font-family: monospace;
`  