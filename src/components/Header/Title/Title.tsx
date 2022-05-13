import styled from "@emotion/styled"
import { FC } from "react"

export interface GameNameProps {
  /**
   * Text for the header
   */
  name: string
}

export const GameName = ({ name }: GameNameProps) => {
  return (
    <Title>
      {name}
    </Title>
  )
}

const Title = styled.h1`
  margin-bottom: 2rem;
  font-family: monospace;
`  