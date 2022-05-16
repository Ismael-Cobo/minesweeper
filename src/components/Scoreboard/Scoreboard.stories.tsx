import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Scoreboard } from './Scoreboard';

export default {
  title: 'Minesweeper/Scoreboard',
  component: Scoreboard
} as ComponentMeta<typeof Scoreboard>

const Template: ComponentStory<typeof Scoreboard> = (args) => {
  return (
    <Scoreboard {...args} />
  )
}

export const GameScoreboard = Template.bind({})
GameScoreboard.args = {
  numberOfBoms: '010',
  dificulty: ['easy', 'medium', 'expert'],
  onReset: () => null,
  timer: '000'
}