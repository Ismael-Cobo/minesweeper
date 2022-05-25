import { renderHook, act } from '@testing-library/react-hooks'
import { useMouseDown } from './useMouseDown'

describe('test for custom hook useMouseDown', () => { 

  it('should toggle state after handleMouseDown and handleMouseUp calls', () => {
    
    const {result} = renderHook(useMouseDown)

    const [mouseDown, handleMouseDown, handleMouseUp] = result.current
    

    expect(mouseDown).toBe(false)

    act(handleMouseDown)
    expect(result.current[0]).toBe(true)

    
    act(handleMouseUp)
    expect(result.current[0]).toBe(false)


  })

 })