import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Legend } from './Legend';

export default {
  title: 'Minesweeper/Header/Legend',
  component: Legend
} as ComponentMeta<typeof Legend>

const Template: ComponentStory<typeof Legend> = (args) => {
  return (
    <Legend {...args} />
  )
}

export const GameLegend = Template.bind({})
GameLegend.args = {
  feature: 'flag',
  firstAction: 'alt',
  secondAction: 'click'
}
