import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Counter } from "./Counter";


export default {
  title: 'Minesweeper/Scoreboard/Score',
  component: Counter

} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => {
  return (
    <Counter {...args} />
  )
}

export const GameScore = Template.bind({})
GameScore.args = {
  children: '10'
}