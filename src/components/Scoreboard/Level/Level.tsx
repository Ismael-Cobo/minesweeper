import styled from '@emotion/styled'
import { FC } from 'react'

export interface LevelProps {
  /**
   * Array of diferent levels of dificulty
   */
  children: string[];
}

export const Level: FC<LevelProps> = ({
  children
}) => {
  return (
    <Select>
      {
        children.map(option => (
          <Option value={option} key={option}>
            {option}
          </Option>
        ))

      }
    </Select>
  )
}

const Select = styled.select`
  margin: 0;
  height: 36px;
  border-radius: 0;
  border-width: 3px;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`

const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2rem;
  padding: 0 0.2vw 0.2vw;
`