import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';


export default {
  title: 'Minesweeper/Header/Header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => {
  return (
    <Header {...args} />
  )
}

export const GameHeader = Template.bind({})
GameHeader.args = {
  name: 'minesweeper',
  feature: 'flag',
  firstAction: 'alt',
  secondAction: 'click'
}