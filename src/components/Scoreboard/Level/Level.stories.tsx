import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Level } from './Level';


export default {
  title: 'Minesweeper/Scoreboard/Level',
  component: Level
} as ComponentMeta<typeof Level>

const Template: ComponentStory<typeof Level> = (args) => {
  return (
    <Level {...args} />
  )
}

export const GameLevel = Template.bind({})
GameLevel.args = {
  children: ['easy', 'medium', 'expert']
}