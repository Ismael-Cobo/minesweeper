import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GameName } from './Title';

export default {
  title: 'Minesweeper/Header/GameName',
  component: GameName
} as ComponentMeta<typeof GameName>

const Template: ComponentStory<typeof GameName> = (args) => {
  return (
    <GameName {...args} />
  )
}

export const MinesweeperGameName = Template.bind({})
MinesweeperGameName.args = {
  name: 'minesweeper'
}