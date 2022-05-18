import styled from '@emotion/styled'
import { FC } from 'react'
import { Cell as CellType, CellState, Coords } from '../../helpers/Fiel'

export interface CellProps {
  /**
   * Number of the cell
   */
  children: CellType;

  /**
   * Cell coords
   */
  coords: Coords;

  /**
   * Onclick handler
   */
  onClick: (coords: Coords) => void;

  /**
   * onContextMenu handler
   */
  onContextMenu: (coords: Coords) => void
}

export const checkIsActiveCell = (cell: CellType): boolean => [
  CellState.hidden,
  CellState.mark,
  CellState.weakMark
].includes(cell)

export const Cell: FC<CellProps> = ({ children, coords, ...rest }) => {

  const isActiveCell = checkIsActiveCell(children)

  const onClick = () => {
    /**
     * Sirve para saber a que casilla se le ha de añadir interacción
     * Porque para que le vas a poner interacción a una casilla abierta o a una bomba?
     */
    if (isActiveCell) {
      rest.onClick(coords)
    }
  }

  const onContextMenu = (elem: React.MouseEvent<HTMLElement>) => {
    /**
     * Para que no pase nada cuando hacer click derecho y el alt + click
     */
    elem.preventDefault()
    if (isActiveCell) {
      rest.onContextMenu(coords)
    }
  }

  const props = {
    onClick,
    onContextMenu,
    'data-testid': `${children}_${coords}`
  }

  return <ComponentMap {...props}>{children}</ComponentMap>

}

interface ComponentMapProps {

  /**
   * Children
   */
  children: CellType

  /**
   * Onclick handler
   */
  onClick: (elem: React.MouseEvent<HTMLElement>) => void;

  /**
   * onContextMenu handler
   */
  onContextMenu: (coords: React.MouseEvent<HTMLElement>) => void

  /**
   * Test id
   */
  'data-testid'?: string

}

const ComponentMap: FC<ComponentMapProps> = ({
  children,
  ...rest
}) => {

  switch (children) {
    case CellState.empty:
      // Le paso el onclick porque es como si fuera un componente, ya que acepta los onClick fn
      return <RevealedFrame {...rest} />

    case CellState.bomb:
      return (<BombFrame {...rest}> <Bomb /> </BombFrame>)

    case CellState.hidden:
      return <ClosedFrame {...rest} />

    case CellState.mark:
      return (<ClosedFrame {...rest} > <Flag /> </ClosedFrame>)

    case CellState.weakMark:
      return (<ClosedFrame {...rest}> <WeakFlag /> </ClosedFrame>)

    default:
      return <RevealedFrame {...rest} children={children} />
  }


}


const ClosedFrame = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: relative;
  background-color: #d1d1d1;
  border-width: 3px;
  border-style: solid;
  border-color: white #9e9e9e #9e9e9e white;
  &:hover {
    filter: brightness(1.1);
  }
`

const transparent = 'rgba(0,0,0,0)'
const colors: { [key in CellType]: string } = {
  0: '#000',
  1: '#2a48ec',
  2: '#2bb13d',
  3: '#ec6561',
  4: '#233db7',
  5: '#a6070f',
  6: '#e400af',
  7: '#906a02',
  8: '#fa0707',
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent
}

/**
 * To add aditional styles
 */
const RevealedFrame = styled(ClosedFrame)`
  border-color: #dddddd;
  cursor: default;
  color: ${({ children }) => colors[children as CellType] ?? transparent};
  &:hover {
    filter: brightness(1);
  }
`

const Bomb = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #333;
`

const BombFrame = styled(ClosedFrame)`
  background-color: #ec433c;
`

const Flag = styled.div`
  width: 0px;
  height: 0px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 10px solid #ec433c;
`

const WeakFlag = styled(Flag)`
  border-left: 10px solid #f19996;
`