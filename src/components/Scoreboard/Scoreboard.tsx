import styled from '@emotion/styled';
import { FC } from 'react'
import { Counter } from './Counter/Counter';
import { Level } from './Level/Level';
import { Reset } from './Reset/Reset';

export interface ScoreboardProps {

  /**
   * Number of bombs
   */
  numberOfBoms: string;

  /**
   * Array of Dificulties 
   */
  dificulty: string[];

  /**
   * Reset function action on click
   */
  onReset: () => void;

  /**
   * Start timer
   */
  timer: string;


}


export const Scoreboard: FC<ScoreboardProps> = ({
  numberOfBoms,
  dificulty,
  onReset,
  timer
}) => {


  return (
    <ScoreboardWrap>
      <Counter>
        {numberOfBoms}
      </Counter>

      <MidWrap>
        <Level>
          {dificulty}
        </Level>

        <Reset onReset={onReset} />
      </MidWrap>

      <Counter>
        {timer}
      </Counter>

    </ScoreboardWrap>
  )
}


const ScoreboardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MidWrap = styled.div`
  display: flex;
`
