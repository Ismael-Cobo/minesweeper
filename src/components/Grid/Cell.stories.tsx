import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Cell } from './Cell';


export default {
  title: 'Minesweeper/Grid/Cell',
  component: Cell

} as ComponentMeta<typeof Cell>

const Template: ComponentStory<typeof Cell> = (args) => {
  return (
    <Cell {...args} />
  )
}

export const CellClosed = Template.bind({})