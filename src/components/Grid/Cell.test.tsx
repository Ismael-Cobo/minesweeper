import { render, screen, fireEvent } from '@testing-library/react';
import { Coords, Cell as CellType, CellState } from '../../helpers/Fiel';
import { Cell, checkIsActiveCell } from './Cell';

describe('Test for Cell component', () => {

  const coords: Coords = [1, 1]

  for (let cell = CellState.empty; cell <= CellState.weakMark; cell++) {
    it('check prevent default contextMenu for every cell', () => {
      const props = {
        coords,
        onClick: jest.fn(),
        onContextMenu: jest.fn()
      }

      render(<Cell {...props} >{cell}</Cell>)

      const cellcomp = screen.getByTestId(`${cell}_${coords}`)
      const isPrevented = fireEvent.contextMenu(cellcomp)

      expect(isPrevented).toBe(false)
    })

    it('onClick and onContextMenu handler should be called for active cells', () => {

      const props = {
        coords,
        onClick: jest.fn(),
        onContextMenu: jest.fn()
      }

      render(<Cell {...props} >{cell}</Cell>)
      const cellcomp = screen.getByTestId(`${cell}_${coords}`)

      fireEvent.click(cellcomp)
      fireEvent.contextMenu(cellcomp)

      if (checkIsActiveCell(cell)) {
        expect(props.onClick).toBeCalled()
        expect(props.onContextMenu).toBeCalled()
      } else {
        expect(props.onClick).not.toBeCalled()
        expect(props.onContextMenu).not.toBeCalled()
      }

    })
  }
})