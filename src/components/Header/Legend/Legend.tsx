import { FC } from 'react'
import styled from '@emotion/styled'

export interface LegendProps {
  /**
   * Feature that user will do after first + second action 
   */
  feature: string;
  /**
   * First action
   */
  firstAction: string;
  /**
   * Second action
   */
  secondAction: string
}

export const Legend: FC<LegendProps> = ({
  feature,
  firstAction,
  secondAction
}) => {
  return (
    <Parent>
      <strong>{feature}: </strong>
      <Code>
        <FirstAction>{firstAction}</FirstAction> + {' '}
        <SecondAction>{secondAction}</SecondAction>
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

const FirstAction = styled.span`
  color: #ec433c;
`

const SecondAction = styled.span`
  color: #2a48ec;
`