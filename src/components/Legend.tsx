import { FC } from 'react'
import styled from '@emotion/styled'

export const Legend: FC = () => {
  return (
    <Parent>
      <strong>flag: </strong>
      <Code>
        <Button>alt</Button> + <Click>click</Click>
      </Code>
    </Parent>
  )
}


const Parent = styled.legend`
  font-size: 14px;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`

const Code = styled.code`
  background-color: #e3e3e3;
`

const Button = styled.span`
  color: #ec433c;
`

const Click = styled.span`
  color: #2a48ec;
`