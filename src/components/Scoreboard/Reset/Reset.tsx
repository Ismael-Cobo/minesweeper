import styled from '@emotion/styled'
import { FC, useState } from 'react'


export interface ResetProps {
  /**
   * Reset action on click
   */
  onReset?: () => void
}

export const Reset: FC<ResetProps> = ({
  onReset
}) => {

  const [mouseDown, setMouseDown] = useState(false)

  const handleMouseDown = () => {
    setMouseDown(true)
  }

  const handleMouseUp = () => {
    setMouseDown(false)
  }


  return (
    <Button
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onClick={onReset}
    >
      {mouseDown ? '😮' : '🙂'}
    </Button>
  )
}


const Button = styled.button`
  padding: 0 4px;
  font-size: 24px;
  cursor: pointer;
  font-weight: 700;
  line-height: 30px;
  border-width: 3px;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`