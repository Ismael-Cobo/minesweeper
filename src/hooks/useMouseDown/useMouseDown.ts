import { useState } from 'react'

export type MouseDownType = () => void
export type MouseUpType = () => void



export const useMouseDown = ():[
  boolean,
  MouseDownType,
  MouseUpType
] => {
  const [mouseDown, setMouseDown] = useState(false)

  const handleMouseDown = () => {
    setMouseDown(true)
  }
  
  const handleMouseUp = () => {
    setMouseDown(false)
  }

  return [
    mouseDown,
    handleMouseDown,
    handleMouseUp
  ]
  
}