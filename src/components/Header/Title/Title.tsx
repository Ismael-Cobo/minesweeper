import styled from "@emotion/styled"

export interface TitleProps {
  /**
   * Text for the header
   */
  title: string
}

export const Title = ({
  title
}: TitleProps) => {
  return (
    <GameName>{title}</GameName>
  )
}


const GameName = styled.h1`
  margin-bottom: 2rem;
  font-family: monospace;
`  