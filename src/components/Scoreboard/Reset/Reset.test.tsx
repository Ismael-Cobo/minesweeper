import { FC } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Reset } from './Reset';


describe('Reset button check', () => {

  const ResetWithDummyHandler: FC = () => <Reset onReset={() => null} />


  it('should render elements with default value', () => {

    render(<ResetWithDummyHandler />)

    expect(screen.getByText('🙂')).toBeInTheDocument()
  })

  it('onReset handler shoud be called', () => {

    const onReset = jest.fn()

    render(<Reset onReset={onReset} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(onReset).toBeCalled()

  })

  it('should change state on mouseDown and mouseUp events happen', () => {
    render(<ResetWithDummyHandler />)

    const button = screen.getByRole('button')
    fireEvent.mouseDown(button)
    expect(button.textContent).toBe('😮')

    fireEvent.mouseUp(button)
    expect(button.textContent).toBe('🙂')

  })

  it('should change state on mouseDown and mouseLeave events happen', () => {
    render(<ResetWithDummyHandler />)

    const button = screen.getByRole('button')
    fireEvent.mouseDown(button)
    expect(button.textContent).toBe('😮')

    fireEvent.mouseLeave(button)
    expect(button.textContent).toBe('🙂')
  })

})