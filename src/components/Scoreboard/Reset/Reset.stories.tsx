import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Reset } from './Reset';


export default {

  title: 'Minesweeper/Scoreboard/Reset',
  component: Reset

} as ComponentMeta<typeof Reset>

const Template: ComponentStory<typeof Reset> = (args) => {
  return (
    <Reset {...args} />
  )
}

export const ResetButton = Template.bind({})
