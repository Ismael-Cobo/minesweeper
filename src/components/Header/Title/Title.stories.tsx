import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title } from "./Title";

export default {
  title: 'Minesweeper/Header/GameName',
  component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => {
  return (
    <Title {...args} />
  )
}

export const GameName = Template.bind({})
GameName.args = {
  title: 'minesweeper'
}